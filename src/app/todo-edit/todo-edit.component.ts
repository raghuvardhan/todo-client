import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() todo: Todo = new Todo();
  @Output() todoEmitter = new EventEmitter<Todo>();

  model: Todo = new Todo();

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.model = Object.assign(this.todo);
  }

  onSave(){
    this.todoEmitter.emit(this.model);
    this.resetTodo();
  }

  resetTodo(){
    this.todo =  new Todo();
    this.model = new Todo();
  }

}
