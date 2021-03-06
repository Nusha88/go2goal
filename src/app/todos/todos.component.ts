import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo.model';
import {UserService} from '../services/user.service';
import {MatDialog} from '@angular/material';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  newTodo: string;
  @Input() todoList: any;
  todoLists: any;
  index: any;
  title: string;
  todos: Todo[];
  id: string;
  complete: boolean;
  todoObj: any;
  users: any;
  @Input() username: string;
  user: UserModel;
  todo: Todo;
  isEdited = false;
  noTodos: boolean;
  addTodoListForm: FormGroup;
  addTodoForm: FormGroup;
  public mr: NgbModalRef;
  public mr2: NgbModalRef;

  constructor(public service: UserService, private modalService: NgbModal) {
    this.newTodo = '';
    this.complete = false;
    this.todoLists = [];
  }

  public openModal(content: string) {
    this.mr = this.modalService.open(content);
  }

  public openTodoModal(content: string) {
    this.mr2 = this.modalService.open(content);
  }

  private initForm() {
    const title = '';

    this.addTodoListForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'edited': new FormControl(false)
    });
  }

  private initTodoForm() {
    const todoTitle = '';
    const todoDetails = '';


    this.addTodoForm = new FormGroup({
      'todoTitle': new FormControl(todoTitle),
    });
  }

  addTodoList(todolist) {
    this.todoObj = {
      title: todolist.title,
      isEdited: false,
      todos: []
    };
    this.todoLists.push(this.todoObj);
    this.service.postTodoList(this.todoObj, this.id);
    this.addTodoListForm.reset();
    this.closeModal();
    this.noTodos = false;
  }

  addTodo(value, index) {
    this.todoObj = {
      title: value.todoTitle,
      isEdited: false,
      complete: this.complete
    };
    this.todoLists[index].todos.push(this.todoObj);
    this.service.updateUserTodos(this.user).subscribe(user => user);
    this.addTodoForm.reset();
    this.closeModal2();
  }

  updateTodo(todo, isChecked) {
    todo.complete = isChecked;
    this.service.updateUserTodos(this.user).subscribe(user => user);
  }

  editTodo(todo) {
    todo.isEdited = !todo.isEdited;
  }

  editTodoList(todolist) {
    todolist.isEdited = !todolist.isEdited;
  }

  updateTodoTitle(value, todo) {
    todo.title = value;
    todo.isEdited = false;
    this.service.updateUserTodos(this.user).subscribe(user => user);
  }

  updateTodoList(value, todolist) {
    todolist.title = value;
    todolist.isEdited = false;
    this.service.updateUserTodos(this.user).subscribe(user => user);
  }

  deleteTodo(todo, index, ind) {
    this.todoLists[ind].todos.splice(index, 1);
    this.service.updateUserTodos(this.user).subscribe(user => user);
  }

  deleteTodoList(todo, index) {
    this.todoLists.splice(index, 1);
    this.service.updateUserTodos(this.user).subscribe(user => user);
    if (this.todoLists.length > 0) {
      this.noTodos = false;
    } else {
      this.noTodos = true;
    }
  }

  public closeModal() {
    this.mr.close();
  }

  public closeModal2() {
    this.mr2.close();
  }

  ngOnInit() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername === user.username) {
          this.user = user;
          this.id = this.user._id;
          this.todoLists = this.user.todoLists;
          if (this.todoLists.length > 0) {
            this.noTodos = false;
          } else {
            this.noTodos = true;
          }
        }
      });
    });
    this.initForm();
    this.initTodoForm();
  }
}
