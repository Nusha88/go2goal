import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  users: any;
  @Input() username: string;
  user: any;

  constructor(private router: Router) { }
  ngOnInit() {
    const storedUsername =  localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
  }
}
