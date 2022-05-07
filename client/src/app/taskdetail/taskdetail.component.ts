import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css'],
  providers: [ TaskService ]
})
export class TaskdetailComponent implements OnInit {

  task:any;
  taskdisplayurl:string='';
  editing:boolean=false;

  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router ) { }

  ngOnInit(){
    this.getTask();
  }
  setEditMode(mode):void{
    this.editing = (mode ? true:false);
  }
  
  getTask(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(param)
    .subscribe((task) => {
      this.task = task;
      this.taskdisplayurl = this.taskService.taskUrl;
    });

  }
  updateTask(obj:any):void {
    this.task.task = obj.titleField;
    this.task.description = obj.descField;
    this.taskService.updateTask(this.task._id, this.task)
      .subscribe((result)=>{
        location.reload();
      });
  }
  deleteTask(){
    if (confirm(`Are you sure you want to delete ${this.task.description}?`)){
      console.log(`deleting ${this.task._id}`);
      this.taskService.deleteTask(this.task._id)
        .subscribe((result)=>{
          alert(`Task ${this.task.task} has been deleted`);
          this.router.navigate(['/gallery']);
        })
      }
  }

}
