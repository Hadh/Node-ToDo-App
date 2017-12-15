var express = require('express')
var app = express();
var mongoose = require('mongoose');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
mongoose.connect('mongodb://hdmi:hdmi@ds141766.mlab.com:41766/todo');

var todoController = require('./controllers/todoController');
todoController(app);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });