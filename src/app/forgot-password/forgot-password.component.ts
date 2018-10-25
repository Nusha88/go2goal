import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  user: any;
  submit = false;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  send(email) {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        this.user = user;
        if (user.email === email) {
          console.log(this.user);
          this.userService.postUserEmail(email, user._id);
          this.submit = true;
          localStorage.setItem('username', user.username);
          localStorage.setItem('remember', 'true');
        }
      });
    });
  }
}
