import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()todoList : Todo[] = [];
  
  editTodo : Todo = new Todo();
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
