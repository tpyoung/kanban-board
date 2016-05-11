
'use strict';

const bodyParser = require('body-parser'),
      express    = require('express'),
      PORT       = process.env.PORT || 3000,
      app        = express(),
      db         = require('./models'),
      passport   = require('passport'),
      session    = require('express-session'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt     = require('bcryptjs'),
      User       = db.User
      ;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static('public'))
  .use('/tasks',require('./routes/tasks.js'))
  .use('/signUp', require('./routes/users.js'))
  // .use('/login', require('./routes/login.js'))
  .use(session({
    secret : 'Tyler',
    resave : true,
    saveUninitialized : true
  }))
  .use(passport.initialize())
  .use(passport.session())
  ;

  passport.use('login', new LocalStrategy (
    ((username, password, done) => {

      console.log('IN');
      User.findOne({
        where: {
          username: username
        }
      })
      .then((user) => {
        // if(bcrypt.compareSync(password, user[0].password) === false) {
        //   return done(null, false, {message: 'Incorrect password'});
        // }
        if(!user) {
          return done(null, false, {message:'user does not exist' });
        }
          return done(null, user.dataValues);
      })
      .catch((err) => {
        console.log('error', err);
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
    console.log('LOGIN ROUTE', user);

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
        console.log('81 no user');
        return res.send('false');
      }
    }) (req, res, next);//end of passport.authenticate
  });



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});