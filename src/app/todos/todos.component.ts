import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../models/todo.model';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../services/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../register/CustomValidation';
import {Router} from '@angular/router';
import {isNumber} from 'util';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  newTodo: string;
  title: string;
  todos: Todo[];
  id: string;
  complete: boolean;
  todoObj: any;
  users: any;
  inputUser: any;
  @Input() username: string;
  user: any;
  subscription: Subscription;

  constructor( private router: Router,
               public service: UserService,
               public loginService: LoginService) {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      id: this.id,
      title: this.newTodo,
      complete: false
    };
    this.user.todos.push(this.todoObj);
    this.service.postTodo(this.todoObj, this.user._id);
    console.log(this.user);
    this.newTodo = '';
    event.preventDefault();
  }
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (let i = (this.todos.length - 1 ); i > -1; i--) {
      if (this.todos[i].complete) {
        this.todos.splice(i, 1);
      }
    }
  }
  ngOnInit() {
    this.subscription = this.loginService.getUser().subscribe(username => {
      this.inputUser = username;
      // console.log(this.user);
    });
    this.service.getUsers().subscribe((users) => {
      this.users = users;
      this.users.find((user) => {
        this.user = user;
        if (this.inputUser.username === this.user.username) {
         this.todos = this.user.todos;
         return this.user;
        }
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
