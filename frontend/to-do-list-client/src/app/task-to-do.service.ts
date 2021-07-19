import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskToDo } from './task-to-do';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskToDoService {

  private baseURL = "http://localhost:8080/api/v1/taskToDoDetails";

  
  constructor(private httpClient : HttpClient) { }

  getToDoList() : Observable<TaskToDo[]>{
    
    console.log(this.httpClient.get<TaskToDo[]>(`${this.baseURL}`));
    return this.httpClient.get<TaskToDo[]>(`${this.baseURL}`);
  }

  createTaskToDo(taskToDo: TaskToDo) {
    
    return this.httpClient.post(`${this.baseURL}`,taskToDo);
  }

  getTaskToDoById(id: number): Observable<TaskToDo>{
    
    return this.httpClient.get<TaskToDo>(`${this.baseURL}/${id}`);
  }

  updateToDoTask( userDetails: TaskToDo): Observable<Object>{
    
    return this.httpClient.put(`${this.baseURL}`, userDetails);
  }
  
  deleteToDoTask(id: number): Observable<Object>{
    
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
