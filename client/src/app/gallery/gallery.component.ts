import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [TaskService]
})
export class GalleryComponent implements OnInit {
  task:any;
  taskdisplayurl:string='';
  hardtest = 'hardcoded test';
  title = 'myapp';
  constructor(private TaskService:TaskService){

  }
  TaskList = null;
  ngOnInit(){
    this.updateTaskList();
  }
  updateTaskList():void{
    this.TaskService.listTasks().subscribe((tasks)=>{
      this.TaskList = tasks;
      
    });
  }

}
