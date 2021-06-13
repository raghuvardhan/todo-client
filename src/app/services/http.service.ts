import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl : string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  public getTodoList(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl + "api/todo");
  }

  public deleteTodo(id: number):void{
    this.http.delete(`api/todo/${id}`);
  }
}
