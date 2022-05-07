import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  task:any = {};
  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }
  /*save(newtaskForm) : void {
    let formData = new FormData();
    formData.append('task', this.task.task);
    formData.append('description',  this.task.description);
    console.log("The save is trying");
    this.taskService.createTask(formData)
      .subscribe((task)=>{
        this.newTask.emit();
        newtaskForm.reset();
      });
    
   }*/
   saveTask(obj:any):void {
    this.task.task = obj.titleField;
    this.task.description = obj.descField;
    this.taskService.createTask(this.task)
      .subscribe((result)=>{
        location.reload();
      });
  }
  }