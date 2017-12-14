var express = require('express')
var app = express();
var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static('./public'));
mongoose.connect('mongodb://hdmi:hdmi@ds141766.mlab.com:41766/todo');

var todoController = require('./controllers/todoController');
todoController(app);


app.listen(3000)
console.log('Listening on Port 3000')