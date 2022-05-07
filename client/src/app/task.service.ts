import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class TaskService {
  private apiurl = environment.apiurl;
  taskUrl = environment.apiurl;

  constructor( private http:HttpClient ) { }


  /*TaskList = [
    {_id: 1, task: 'task1', description: 'description1'},
    {_id: 2,task: 'task2', description: 'description2'},
    {_id: 3,task: 'task3', description: 'description3'},
  
  ]*/
  
  listTasks() {
    return this.http.get(this.apiurl);
  }

  getTask(id) {
    return this.http.get(this.apiurl + id);
  }

  deleteTask(id) {
    return this.http.delete(this.apiurl + id);
  }
  updateTask(id, data) {
    return this.http.put(this.apiurl + id, data);
  }
  createTask(task: FormData) {
    return this.http.post(this.apiurl,task)
  }
}
 