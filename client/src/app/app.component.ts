import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  providers: [TaskService]
})

export class AppComponent {
   

}



/*export class AppComponent {
  tasks = [];
  constructor(){
    this.tasks = [
      {task:'task1', description: 'this is a description of task1'},
      {task:'task2', description: 'this is a description of task2'},
      {task:'task3', description: 'this is a description of task3'}
    ]
  }
 
} */