import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './CustomValidation';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() user: UserModel;
  registerForm: FormGroup;
  type = 'password';
  show = false;
  usernameExist = false;
  emailExist = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UserService,
    private loginService: LoginService) {
  }

  sendUser(): void {
    this.loginService.sendUser(this.registerForm.value.username);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {

    const username = '';
    const email = '';
    const password = '';
    this.registerForm = new FormGroup({
      'username': new FormControl(username, [Validators.required, this.usernameTaken(this.usersService)]),
      'email': new FormControl(email, Validators.compose(
        [Validators.required, CustomValidators.emailValidator]
      )),
      'password': new FormControl(password, Validators.required),
    });
  }

  usernameTaken(httpService: UserService) {
    return control => new Promise((resolve, reject) => {
      httpService.lookupUser(control.value).subscribe(data => {
        if (data.length === 1) {
          resolve({usernameTaken: true});
          this.usernameExist = true;
        } else if (data.length === 0) {
          resolve({usernameTaken: false});
          this.usernameExist = false;
          control.status = 'VALID';
        } else {
          resolve(null);
        }
      }, (err) => {
        console.log('in error' + err);
        if (err !== '404 - Not Found') {
          resolve({usernameTaken: true});
          this.usernameExist = true;
        } else {
          resolve(null);
        }
      });
    });
  }

  register() {
    this.sendUser();
    this.usersService.postUser(this.registerForm.value);
    localStorage.setItem('username', this.registerForm.value.username);
    localStorage.setItem('remember', 'true');
    this.router.navigate(['/']);
  }

  toggleShowHidePassword() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
