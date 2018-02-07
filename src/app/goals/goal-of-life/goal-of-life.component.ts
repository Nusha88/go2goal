import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../../services/login.service';
import {Todo} from '../../models/todo.model';
import {FirstLevelSteps, Goals} from '../../models/goals';

@Component({
  selector: 'app-goal-of-life',
  templateUrl: './goal-of-life.component.html',
  styleUrls: ['./goal-of-life.component.scss']
})
export class GoalOfLifeComponent implements OnInit, OnDestroy {

  // @Input() user: UserModel;
  @ViewChild ('mainGoal') mainValue: ElementRef;
  id: string;
  edited = false;
  users: any;
  user: any;
  editedFlsP: boolean;
  showAddMain: boolean;
  showAdd: boolean;
  username: string;
  password: string;
  email: string;
  goal_of_live: string;
  first_level_steps: any;
  second_level_steps: any;
  third_level_steps: any;
  goals_of_year: any;
  goals_of_month: any;
  goals_of_week: any;
  goal: any;
  goals: any;
  name: any;
  todos: Todo[] = [];
  index: number;
  subscription: Subscription;

  constructor(private userService: UserService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.edited = false;
    this.editedFlsP = false;
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.users.map((user) => {
          this.subscription = this.loginService.getUser().subscribe(user2 => {
            if (user.username === user2.username) {
              this.user = user;
              if (this.user.goals.goal_of_live) {
                this.showAddMain = false;
              }
              if (this.user.goals.first_level_steps) {
                this.showAdd = false;
              }
              console.log(this.user);
            }
          });
        }
      );
    });
    // this.subscription = this.loginService.getUser().subscribe(user => {
    //   this.user = user;
    // });
  }

  // ADDING GOAL OF LIFE
  getMainGoal(data: any) {
    const goals = this.goals = new Goals(
      this.goal_of_live = data
    );
    console.log(this.goals);
    this.user = new UserModel(
      this.id = this.user._id,
      this.username = this.user.username,
      this.password = this.user.password,
      this.email = this.user.email,
     this.goals = goals
    )
    this.userService.updateUser(this.user._id, this.user) .subscribe(
      user => this.user = user
    );
    console.log(this.user);
  }
  // ADDING FIRST LEVEL STEP
  addFirstStep(data) {
    const fls = this.first_level_steps = new FirstLevelSteps(
      this.index = this.index,
      this.name = data
    );
    const goals = this.goals = new Goals(
      this.goal_of_live = this.user.goals.goal_of_live,
      this.first_level_steps = fls
    );
    this.user = new UserModel(
      this.id = this.user._id,
      this.username = this.user.username,
      this.password = this.user.password,
      this.email = this.user.email,
      this.goals = goals
    )
    this.userService.updateUser(this.user._id, this.user) .subscribe(
      user => {
        this.user = user;
        this.user.goals.first_level_steps.push(data);
      }
    );
    console.log(this.user);
  }
  editFirstStep() {
    this.editedFlsP = !this.editedFlsP;
  }
  // onEditGoalFirstStep(editedFls: boolean) {
  //   this.editedFlsP = editedFls;
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
