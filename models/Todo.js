var mongoose = require('mongoose')
,Schema = mongoose.Schema

 todoSchema= new mongoose.Schema({
    item: String
});

 Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;