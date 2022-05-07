var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
var taskController = require("../../controller/taskController");
var Task = require('../../models/taskModel');
const TaskService = taskController.TaskService;

router.use((req, res, next) => {
    
    res.set({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    });
    next();
})

// tasks - list all tasks - Works
router.get("/", (req, res, next) => {
    TaskService.list()
        .then((tasks) => {
            res.status(200);
            res.send(JSON.stringify(tasks));
        });
});

// find - find all tasks - Works

router.get("/:taskid", (req, res, next) => {
    TaskService.read(req.params.taskid)
        .then((task) => {
            res.status(200);
            res.send(JSON.stringify(task));
        }).catch((err) => {
            res.status(404);
            res.end();
        });
});

//update


//update

//update
router.put('/:taskid', (req, res, next)=>{
    let putdata = req.body;
    TaskService.update(req.params.taskid, putdata)
      .then((updatedTask)=>{
        res.status(200);
        res.send(JSON.stringify(updatedTask));
      }).catch((err)=> {
        res.status(404);
        res.end();
      });
   });
// tasks - POST
router.post('/', async (req, res, next)=>{
  console.log(req.body);
  const task  = {
      task: req.body.task,
      description: req.body.description,
      }
  try{
      const taskSave = await TaskService.create(task);
      res.status(201);
      res.send(JSON.stringify(task));
  }catch(err){
      console.log(err);
      throw new Error("TaskSaveError", task);
  }
});
  
  // delete
  router.delete('/:taskid', (req, res, next)=>{
    let id = req.params.taskid;
    TaskService.delete(req.params.taskid)
      .then((task) => {
       res.status(200);
       res.send(JSON.stringify(task));
     }).catch((err)=> {
       res.status(404);
       res.end();
     });;
  });
  
  // error
  router.use(function(err, req, res, next){
    console.error(err);
    res.status(500);
    res.end();
  });



module.exports = router;