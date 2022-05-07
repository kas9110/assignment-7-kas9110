var Task = require('../models/taskModel');

class TaskService {
    static list(){
        return Task.find({})
            .then((tasks)=>{
                return tasks;
            });
    }
    static read(id){
        return Task.findById(id)
            .then((task)=>{
                return task;
            });
    }
    static create(obj){
        var task = new Task(obj);
        return task.save();
    }
    static update(id, data){
        return Task.findById(id)
            .then((task)=>{
                task.set(data);
                task.save();
                return task;
            });
    }
    static delete(id){
        return Task.remove({_id: id})
            .then((obj)=>{
                return obj;
            });
    }
    
}

module.exports.TaskService = TaskService;