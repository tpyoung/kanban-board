
'use strict';

const bodyParser    = require('body-parser'),
      express       = require('express'),
      PORT          = process.env.PORT || 3000,
      app           = express(),
      db            = require('./models'),
      passport      = require('passport'),
      session       = require('express-session'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt        = require('bcryptjs'),
      login         = require('./routes/login'),
      User          = db.User
      ;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static('public'))
  .use('/tasks',require('./routes/tasks.js'))
  .use('/signUp', require('./routes/users.js'))
  .use('/login', login)
  .use(session({
    secret : process.env.SECRET_KEY || 'Tyler',
    resave : true,
    saveUninitialized : true
  }))
  .use(passport.initialize())
  .use(passport.session())
  ;

  passport.use('login', new LocalStrategy (
    ((username, password, done) => {
      User.findOne({
        where: {
          username: username
        }
      })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.dataValues.password, (err, res) => {
            if (res === true) {
              return done(null, user);
            } else {
              return done(null, false, {message: 'Incorrect password'});
            }
          });
        }
        else {
          return done(null, false, {message:'user does not exist' });
        }
    })
      .catch((err) => {
        console.log('bad bad bad bad');
        return done(err);
      });
    })
  ));

  passport.serializeUser(function(user, done) {
    return done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    return done(null, user);
  });

  app.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if(user) {
        req.login(user, function(err) {
          if(err) {
            return next(err);
          }
          return res.json(user);
        });
      }
      if(err) {
        return next(err);
      } //respond 500 or 401
      if(!user) {
        return res.send('false');
      }
    }) (req, res, next);
  });

  app.get('*', function(req, res){
    res.sendFile('./public/index.html', {
      root  : __dirname
    });
  });

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});
