
'use strict';

const bodyParser = require('body-parser'),
      express    = require('express'),
      PORT       = process.env.PORT || 3000,
      path       = require('path'),
      app        = express(),
      db         = require('./models'),
      passport   = require('passport'),
      session    = require('express-session'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt     = require('bcryptjs'),
      User       = db.User,
      loginRoute = require('./routes/login.js'),
      usersRoute = require('./routes/users.js'),
      tasksRoute = require('./routes/tasks.js')
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'catbutts',
  resave: false,
  saveUninitialized: false
}));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
      done(null, user);
    });
  });

  passport.use('login', new LocalStrategy(
    (username, password, done) => {
    User.findOne({where: {username: username}})
    .then((user) => {
      if(!user) {
        return done(null, false, {message: "The username or password is invalid"});
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if(res === true) {
          return done(null, user);
        } else {
          return done(null, false, {message: "The username or password is invalid"});
        }
      });
    })
    .catch((err) => {
      return done(err);
    });
  }));

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/tasks', tasksRoute);
app.use('/signup', usersRoute);
app.use('/login', loginRoute);
app.use('/logout', (req, res) => {
  req.logout();
  res.json({path: '/tasks'});
});

app.get('/', (req, res) => {
  res.json({path: '/tasks'});
});

app.get('*', (req, res) => {
  res.json({path: '/public/index.html',
    root: __dirname
  });
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
});