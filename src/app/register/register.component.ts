import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './CustomValidation';
import {UserModel} from '../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {UserFormService} from '../services/user-form.service';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public uf: UserFormService,
    private usersService: UserService,
    private loginService: LoginService) { }

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
      'username': new FormControl(username, Validators.required),
      'email': new FormControl(email, Validators.compose([Validators.required, CustomValidators.emailValidator])),
      'password': new FormControl(password, Validators.required),
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
