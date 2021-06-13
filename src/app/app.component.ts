import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Todo } from './todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-client';
  todoList : Todo[] = [];
  editTodo : Todo = new Todo();
  
  constructor(private httpService: HttpService){
    var objects = this.httpService.getTodoList().subscribe((todos) => this.todoList = todos);
    console.log(objects);
  }

  onEdit(todo: Todo){
    this.editTodo = Object.assign({}, todo);
  }

  onTodoSaved(todo: Todo){
    this.editTodo = new Todo();
    if(this.todoList.includes(todo)){
      this.todoList[this.todoList.indexOf(todo)] = {...todo};
    }
    else{
      this.todoList.push(todo);
    }
  }

  onDelete(todo: Todo){
    this.httpService.deleteTodo(todo.id);
  }

}
