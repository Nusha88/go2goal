import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../services/todo-data.service';
import {Todo} from '../models/todo.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todoDataService: TodoDataService, public userService: UserService) { }
  // newTodo = <Todo[]>;

  ngOnInit() {
  }
  addTodo() {
    // this.todoDataService.addTodo(this.newTodo);
    // this.newTodo = new Todo();
    // this.userService.updateUser(this.newTodo);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
