import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASK } from '../mock-tasks';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
// correr con npm run server

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(
    private http: HttpClient
  ) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

deleteTask(task: Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`
  return this.http.delete<Task>(url)
}

updateTaskReminder(task: Task): Observable<Task>{
  const url = `${this.apiUrl}/${task.id}`
  return this.http.put<Task>(url, task, httpOptions);
}

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}