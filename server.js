
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

  passport.use(new LocalStrategy (
    ((username, password, done) => {
      User.findAll({
        where: {
          username: username
        }
      })
      .then((user) => {
        if(user.length === 0) {
          return done(null, false, {message: 'Username does not exist'});
        }
        if(bcrypt.compareSync(password, user[0].password) === false) {
          return done(null, false, {message: 'Incorrect password'});
        }
        return done(null, user);
      });
    })
    ));

    passport.serializeUser(function(user, done) {
      return done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      return done(null, user);
    });

  // app.post('/login', ((req, res) => {
  //   passport.authenticate('local', {
  //     successRedirect : '/tasks',
  //     faillureRedirect : '/signUp'
  //   });
  // })



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});