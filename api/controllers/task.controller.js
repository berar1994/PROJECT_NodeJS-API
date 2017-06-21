'use strict';

var mongoose = require('mongoose');
var Task = mongoose.model('Task');


/**
 * checks if an object has properties
 * @param {Object} object
 * @returns {boolean} true if is empty
 *                    false otherwise
 */
function isEmpty(object) {
    for (var key in object) {
        return !object.hasOwnProperty(key);
    }
    return true;
}



/**
 * check if an object id has the correct mongodb _id format
 * @param {String} objectId
 * @returns {boolean} true if it's valid
 *                    false otherwise
 */

function isObjectIdValid(objectId) {
    return objectId.match(/^[0-9a-fA-F]{24}$/);
}


exports.getAll = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            res.send(err);
        }

        res.json(tasks);
    });
};


exports.getOne = function (req, res) {
    var id = req.params.id;

    if (isObjectIdValid(id)) {
        Task.findById(id, function (err, task) {
            if (err) {
                res.send(err);
            }

            res.json(task);

        });

    } else {
        res.sendStatus(404);
    }
};



exports.addTask = function (req, res) {
    var newTask = new Task(req.body);

    Task.find({
        "name": req.body.name
    }, function (err, task) {
        if (err) {
            res.send(err);
        }

        if (!isEmpty(task)) {
            res.json({
                error: 'Task already exists !'
            });
        } else {
            newTask.save(function (err, insertedTask) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    message: 'Inserted.'
                });
            });
        }

    });

};



exports.deleteTask = function (req, res) {
    var id = req.params.id;

    if (isObjectIdValid(id)) {
        Task.remove({
            _id: id
        }, function (err, task) {
            if (err) {
                res.send(err);
            }

            res.json({
                message: 'Task successfully deleted.'
            });
        });
    } else {
        res.sendStatus(404);
    }
};
