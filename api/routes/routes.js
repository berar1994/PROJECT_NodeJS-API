'use strict';
module.exports = function (app) {
    
    var taskController = require('../controllers/task.controller');
    
    // GET requests
    app.route('/tasks').get(taskController.getAll);
    app.route('/task/:id').get(taskController.getOne);
    
    // POST requests
    app.route('/task').post(taskController.addTask);
    app.route('/task/:id').post(taskController.deleteTask);
    
    // PUT requests
    app.route('/task').put(taskController.updateTask);
    

};
