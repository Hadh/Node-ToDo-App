var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var Todo = require('../models/Todo')

module.exports = function(app){
    
    app.get('/todo',function(req, res){
        Todo.find({},function(err, data){
            if(err) throw err;
            res.render('todo',{todos:data})
        })
    });

    app.post('/todo', urlencodedParser, function(req, res){
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',function(req, res){
        // because items with spaces comes with - in the URL.
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data)
        }) 
    });
}