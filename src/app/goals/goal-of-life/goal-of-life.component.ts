import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../../services/login.service';
import {Todo} from '../../models/todo.model';
import {FirstLevelSteps, Goals, SecondLevelSteps} from '../../models/goals';

@Component({
  selector: 'app-goal-of-life',
  templateUrl: './goal-of-life.component.html',
  styleUrls: ['./goal-of-life.component.scss']
})
export class GoalOfLifeComponent implements OnInit, OnDestroy {

  // @Input() user: UserModel;
  @ViewChild('mainGoal') mainValue: ElementRef;
  id: string;
  edited = false;
  users: any;
  user: any;
  fls: any;
  tls: any;
  editedFlsP = false;
  editedSls = false;
  editedTls = false;
  editedFthls = false;
  addFls: boolean;
  addSls = false;
  addTls = false;
  addFthls = false;
  showAddMain = true;
  showAdd = false;
  username: string;
  goal_of_live: string;
  first_level_steps: any;
  second_level_steps: any;
  third_level_steps: any;
  fourth_level_steps: any;
  goals_of_year: any;
  goals_of_month: any;
  goals_of_week: any;
  goal: any;
  goals: any;
  index: number;
  constructor(private userService: UserService, private loginService: LoginService) {
    this.goals = [];
    this.first_level_steps = [];
  }

  ngOnInit() {
    this.edited = false;
    this.editedFlsP = false;
    this.editedSls = false;
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
      this.users.forEach((user) => {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername === user.username) {
            this.user = user;
            console.log(this.user);
            this.goals = this.user.goals;
            if (this.user.goals.length > 0) {
              this.goals = this.user.goals;
              this.fls = this.goals[0].first_level_steps;
            } else {
              this.user.goals.length = 0;
            }
            if (this.user.goals.length === 0) {
              this.showAddMain = true;
            } else {
              this.showAddMain = false;
            }
            if (!this.first_level_steps) {
              this.showAdd = true;
            }
          }
        }
      );
    });
  }

  // MAIN GOAL
  getMainGoal(data: any) {
    const goals = {
      id: this.id,
      goal_of_live: data,
      first_level_steps: []
    };
    this.goals.push(goals);
    console.log(this.goals);
    console.log(this.user);
    // this.userService.updateUser(this.user).subscribe(goal => goal);
    this.showAddMain = false;
  }

  editMainGoal() {
    this.edited = !this.edited;
  }

  updateMainGoal(value) {
    this.user.goals[0].goal_of_live = value;
    this.userService.updateUser(this.user).subscribe(goal => goal);
    this.edited = !this.edited;
  }

  // FIRST LEVEL STEPS
  addFirstStep(data) {
    const fls = {
      index: this.index,
      title: data
    };
    this.user.goals[0].first_level_steps.push(fls);
    this.userService.updateUser(this.user).subscribe(
      user => user
    );
    this.addFls = !this.addFls;
  }

  updateFirstStep(value) {
    this.user.goals[0].first_level_steps.forEach(fls => {
      if (fls.editedFlsP) {
        fls.title = value;
        fls.editedFlsP = !fls.editedFlsP;
      }
    });
    this.userService.updateUser(this.user).subscribe(goal => goal);
  }

  deleteFls(fls, index) {
    this.user.goals[0].first_level_steps.splice(index, 1);
    this.userService.updateUser(this.user).subscribe(user => user);
  }

  // THIRD LEVEL STEPS
  addSecondStep(value, index) {
    const sls_value = {
      index: this.index,
      title: value
    };
    this.user.goals[0].first_level_steps[index].second_level_steps.push(sls_value);
    this.user.goals[0].first_level_steps[index].addSls = !this.user.goals[0].first_level_steps[index].addSls;
    this.userService.updateUser(this.user).subscribe(
      user => user
    );
  }

  updateSecondStep(value, i) {
    this.user.goals[0].first_level_steps[i].second_level_steps.forEach(sls => {
      if (sls.editedSls) {
        sls.title = value;
        sls.editedSls = !sls.editedSls;
      }
    });
    this.userService.updateUser(this.user).subscribe(goal => goal);
  }

  deleteSls(sls, i, index) {
    this.user.goals[0].first_level_steps[i].second_level_steps.splice(index, 1);
    this.userService.updateUser(this.user).subscribe(user => user);
  }

  addThirdStep(value, index, i) {
    const tls_value = {
      index: this.index,
      title: value
    };
    this.user.goals[0].first_level_steps[index].second_level_steps[i].third_level_steps.push(tls_value);
    this.fls[index].second_level_steps[i].addTls = !this.fls[index].second_level_steps[i].addTls;
    this.userService.updateUser(this.user).subscribe(
      user => user
    );
  }

  updateThirdStep(value, i, index) {
    this.user.goals[0].first_level_steps[i].second_level_steps[index].third_level_steps.forEach(tls => {
      if (tls.editedTls) {
        tls.title = value;
        tls.editedTls = !tls.editedTls;
      }
    });
    this.userService.updateUser(this.user).subscribe(goal => goal);
  }

  deleteTls(tls, ind, i, index) {
    this.user.goals[0].first_level_steps[i].second_level_steps[index].third_level_steps.splice(ind, 1);
    this.userService.updateUser(this.user).subscribe(user => user);
  }


  addFourthStep(value, index, i, ind) {
    const fthls_value = {
      title: value
    };
    this.user.goals[0].first_level_steps[index].second_level_steps[i].third_level_steps[ind].fourth_level_steps.push(fthls_value);
    this.fls[index].second_level_steps[i].third_level_steps[ind].addFthls = !this.fls[index].second_level_steps[i].third_level_steps[ind].addFthls;
    this.userService.updateUser(this.user).subscribe(
      user => user
    );
  }

  updateFourthStep(value, i, index, ind) {
    this.user.goals[0].first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.forEach(tls => {
      if (tls.editedFthls) {
        tls.title = value;
        tls.editedFthls = !tls.editedFthls;
      }
    });
    this.userService.updateUser(this.user).subscribe(goal => goal);
  }

  deleteFthls(tls, ind, i, index, ind4) {
    this.user.goals[0].first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.splice(ind4, 1);
    this.userService.updateUser(this.user).subscribe(user => user);
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
