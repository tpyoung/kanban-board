'use strict';

const bodyParser = require('body-parser'),
      express    = require('express'),
      PORT       = process.env.PORT || 3000,
      app        = express(),
      db         = require('./models'),
      User       = db.User
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/tasks',require('./routes/tasks.js'));

app.get('/signUp', ((req, res) => {
  User.findAll()
  .then((users) => {
    res.send(users);
  });
})

);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});