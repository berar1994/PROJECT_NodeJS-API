'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Task');

function isEmpty(map) {
   for(var key in map) {
      return !map.hasOwnProperty(key);
   }
   return true;
}

exports.getAll = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            res.send(err);
        }
        
        res.json(tasks);
    });
};

exports.addTask = function(req, res){
    var newTask = new Task(req.body);
    
    Task.find({"name": req.body.name}, function(err, task){
        if(err){
            res.send(err);
        }
        
        if(!isEmpty(task)){
            res.json({error: 'Task already exists !'});
        } else{
            newTask.save(function(err, insertedTask){
                if(err){
                    res.send(err);
                }
                res.json({message : 'Inserted.'});
            });
        }
        
    });
    
};
