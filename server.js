
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
  .use('/login', require('./routes/login.js'))
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
        // console.log('passportuser', user);
        // if(bcrypt.compareSync(password, user[0].password) === false) {
        //   return done(null, false, {message: 'Incorrect password'});
        // }
        console.log('USER', user);
        if(!user) {
          // return done( new Error('user does not exist'));
          return done('user does not exist');
        }
          return done(null, user);
      })
      .catch((err) => {
        console.log('error', err);
        // return done(err);
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
    console.log('user', req.user);

    passport.authenticate('local', function(err, user, info) {

    console.log('LOGIN!!')
   //  if(req.user) {
   //   res.json(req.user);
   // }
      if(err) {
        return next(err);
      }
      if(!req.user) {
        return res.send(401, {success:false, message: 'authentication failed'});
      }
      req.login(user, function(err) {
        if(err) {
          return next(err);
        }
        return res.json(req.user);
      });
      }) (req, res, next);//end of passport.authenticate
    });



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});