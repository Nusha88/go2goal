import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;
  password: string;
  user: any;

  constructor(private router: Router,
              private loginService: LoginService,
              private service: UserService,
              private route: ActivatedRoute) {
  }

  sendUser(): void {
    this.loginService.sendUser(this.user.username);
  }

  updatePassword() {
    const paramToken = this.route.snapshot.children[0].params.token;
    this.service.getToken().subscribe(tokens => {
      tokens.forEach(token => {
        if (paramToken === token.token) {
          this.service.getUsers().subscribe(users => {
            users.forEach(user => {
              this.user = user;
              if (token.user_id === user._id) {
                user.password = this.updatePasswordForm.value.password;
                console.log(this.user);
                this.service.updateUserPassword(user).subscribe(u => u);
                this.router.navigate(['/']);
                return this.sendUser();
              }
            });
          });
        }
      });
    });
  }

  private initForm() {

    const password = '';
    const passwordConfirm = '';

    this.updatePasswordForm = new FormGroup({
      'password': new FormControl(password, Validators.required),
      'passwordConfirm': new FormControl(passwordConfirm, Validators.required),
    }, passwordMatchValidator);

    function passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('passwordConfirm').value
        ? null : {'mismatch': true};
    }
  }

  ngOnInit() {
    this.initForm();
  }

}
