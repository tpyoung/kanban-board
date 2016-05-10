
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
  .use((req, res, next) => {
    res.locals.username = req.body.username;
    next();
  })
  ;

  passport.use(new LocalStrategy (
    ((username, password, done) => {
      User.findOne({
        where: {
          username: username
        }
      })
      .then((user) => {
        console.log('passportuser', user);
        // if(bcrypt.compareSync(password, user[0].password) === false) {
        //   return done(null, false, {message: 'Incorrect password'});
        // }

        if(!user) {
          // return done( new Error('user does not exist'));
          return done('user does not exist');
        }
          return done(null, user);
      })
      .catch((err) => {
        console.log('error', err);
        // return done(err);
        return done('server error');
      });
    })
    ));

    passport.serializeUser(function(user, done) {
      return done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      return done(null, user);
    });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    console.log('user', req.user);

    if(req.user) {
     res.json(req.user);
   }
   else {
    res.json({success:false})
   }

    }

  );



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});