var express = require('express');
const { TaskService } = require('../controller/taskController');
var router = express.Router();
var app = express();
var Task = require("../models/taskModel");



 

/* GET users listing and route to the users view with passing task and description */
// This then takes the information in the URL and passes it along to the template (through the query string)
router.get('/', (req,res,next) =>{
  TaskService.list()
    .then((tasks)=>{
      res.render('users', {
        tasks: tasks
      });
    })});
  

/*router.get('/:task/:description', function(req, res, next) {
  res.render('users', {"task": req.params['task'], "description": req.params['description'] });
});*/

router.get('/:taskid', (req ,res ,next )=> {
  console.log("finding " + req.params.taskid);
  Task.findOne({'_id': req.params.taskid})
    .then((task)=>{
      res.render('updateTask', {
        task: task
      });
    });
});

router.post('/:taskid', (req ,res ,next )=> {
  Task.findOne({'_id':req.params.taskid})
    .then((task)=>{
      var data = {
        task: req.body.task,
        description: req.body.description
      }
      task.set(data);
      task.save().then(()=>{
        res.redirect('/users');
      });
      })
      .catch((err)=>{
        if (err) console.log(err);
      });
    });


router.post('/', (req, res, next) => {
  var task = {
    task: req.body.task,
    description: req.body.description
  }
  var task = new Task(task);
  task.save()
    .then(() =>{
      res.redirect('/users');
    })

});

module.exports = router;
