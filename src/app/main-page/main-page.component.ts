import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  username: any;
  users: any;
  user: any;
  todosNumber: number;
  notesNumber: number;
  postsNumber: number;
  golNumber: number;
  goyNumber: number;
  gomNumber: number;
  gowNumber: number;
  todos: any;
  constructor(public service: UserService) {
    this.todos = [];
  }

  ngOnInit() {
    const storedUsername =  localStorage.getItem('username');
      this.service.getUsers().subscribe(users => {
        this.users = users;
        this.users.forEach(user => {
          this.user = user;
          if (storedUsername === this.user.username) {
            this.user = user;
            this.gomNumber = this.user.goals_of_the_month.length;
            this.golNumber = this.user.goal_of_live.length;
            this.goyNumber = this.user.goals_of_the_year.length;
            this.gomNumber = this.user.goals_of_the_month.length;
            this.gowNumber = this.user.goals_of_the_week.length;
            this.notesNumber = this.user.notes.length;
            this.user.todoLists.forEach(todolist => {
              this.todos.push(todolist.todos);
            });
            this.todosNumber = this.todos.length;
            this.postsNumber = this.user.posts.length;
          }
        });
      });
  }

}
