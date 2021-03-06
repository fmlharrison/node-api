var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var port = process.env.PORT || 8080;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Routes
app.use('/', index);
app.use('/api', users);

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
