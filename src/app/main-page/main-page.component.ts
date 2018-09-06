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
  @Input() todos: any;
  @Input() gol: any;
  @Input() goy: any;
  @Input() gom: any;
  @Input() gow: any;
  todosNumber: number;
  golNumber: number;
  goyNumber: number;
  gomNumber: number;
  gowNumber: number;
  constructor(public service: UserService) { }

  ngOnInit() {
    const storedUsername =  localStorage.getItem('username');
      this.service.getUsers().subscribe(users => {
        this.users = users;
        this.users.forEach(user => {
          this.user = user;
          if (storedUsername === this.user.username) {
            this.user = user;
            if (this.user.goals) {
              this.golNumber = 1;
            } else {
              this.golNumber = 0;
            }
          }
        });
      });
  }

}
