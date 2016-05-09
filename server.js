
'use strict';

const bodyParser = require('body-parser'),
      express    = require('express'),
      PORT       = process.env.PORT || 3000,
      app        = express(),
      db         = require('./models')
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/tasks',require('./routes/tasks.js'));

app.use('/signUp', require('./routes/users.js'));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});