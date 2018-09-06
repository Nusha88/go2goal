import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-goal-of-life',
  templateUrl: './goal-of-life.component.html',
  styleUrls: ['./goal-of-life.component.scss']
})
export class GoalOfLifeComponent implements OnInit {

  @ViewChild('mainGoal') mainValue: ElementRef;
  id: string;
  edited = false;
  user: any;
  editedFlsP = false;
  editedSls = false;
  editedTls = false;
  editedFthls = false;
  editedFithls = false;
  addFls: boolean;
  addSls = false;
  addTls = false;
  addFthls = false;
  addFithls = false;
  showAddMain: boolean;
  username: string;
  goal_of_live: string;
  first_level_steps: any;
  second_level_steps: any;
  third_level_steps: any;
  fourth_level_steps: any;
  fifth_level_steps: any;
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
      users.forEach((user) => {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername === user.username) {
            this.user = user;
            this.goals = this.user.goal_of_live;
            this.first_level_steps = this.user.first_level_steps;
            if (this.goals.length > 0) {
              this.showAddMain = false;
            } else {
              this.showAddMain = true;
            }
          }
        }
      );
    });
  }

  // MAIN GOAL
  getMainGoal(data: any) {
    let gol = {
      index: '',
      title: data
    };
    this.goals.push(gol);
    this.user.goal_of_live = this.goals;
    this.userService.updateGoalOfLife(this.user).subscribe(goal => goal);
    this.showAddMain = false;
  }

  editMainGoal() {
    this.edited = !this.edited;
  }

  updateMainGoal(value) {
    this.user.goal_of_live[0].title = value;
    this.userService.updateGoalOfLife(this.user).subscribe(goal => goal);
    this.edited = !this.edited;
  }

  deleteGol(ind) {
    this.goals.splice(ind, 1);
    this.user.goal_of_live = this.goals;
    this.user.first_level_steps = [];
    this.userService.updateGoalOfLife(this.user).subscribe(goal => goal);
    this.showAddMain = true;
  }

  // FIRST LEVEL STEPS
  addFirstStep(data) {
    const fls = {
      index: this.index,
      title: data,
      second_level_steps: []
    };
    this.first_level_steps.push(fls);
    this.userService.updateFirstLevelSteps(this.user).subscribe(
      user => user
    );
    this.addFls = !this.addFls;
  }

  updateFirstStep(value) {
    this.first_level_steps.forEach(fls => {
      if (fls.editedFlsP) {
        fls.title = value;
        fls.editedFlsP = !fls.editedFlsP;
      }
    });
    this.userService.updateFirstLevelSteps(this.user).subscribe(goal => goal);
  }

  deleteFls(fls, index) {
    this.first_level_steps.splice(index, 1);
    this.userService.updateFirstLevelSteps(this.user).subscribe(user => user);
  }

  // THIRD LEVEL STEPS
  addSecondStep(value, index) {
    const sls_value = {
      index: this.index,
      title: value,
      third_level_steps: []
    };
    this.first_level_steps[index].second_level_steps.push(sls_value);
    this.user.first_level_steps[index].addSls = !this.user.first_level_steps[index].addSls;
    this.userService.updateFirstLevelSteps(this.user).subscribe(
      user => user
    );
  }

  updateSecondStep(value, i) {
    this.first_level_steps[i].second_level_steps.forEach(sls => {
      if (sls.editedSls) {
        sls.title = value;
        sls.editedSls = !sls.editedSls;
      }
    });
    this.userService.updateFirstLevelSteps(this.user).subscribe(goal => goal);
  }

  deleteSls(sls, i, index) {
    this.first_level_steps[i].second_level_steps.splice(index, 1);
    this.userService.updateFirstLevelSteps(this.user).subscribe(user => user);
  }

  addThirdStep(value, index, i) {
    const tls_value = {
      index: this.index,
      title: value,
      fourth_level_steps: []
    };
    this.first_level_steps[index].second_level_steps[i].third_level_steps.push(tls_value);
    this.first_level_steps[index].second_level_steps[i].addTls = !this.first_level_steps[index].second_level_steps[i].addTls;
    this.userService.updateFirstLevelSteps(this.user).subscribe(
      user => user
    );
  }

  updateThirdStep(value, i, index) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps.forEach(tls => {
      if (tls.editedTls) {
        tls.title = value;
        tls.editedTls = !tls.editedTls;
      }
    });
    this.userService.updateFirstLevelSteps(this.user).subscribe(goal => goal);
  }

  deleteTls(tls, ind, i, index) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps.splice(ind, 1);
    this.userService.updateFirstLevelSteps(this.user).subscribe(user => user);
  }


  addFourthStep(value, i, index, ind) {
    const fthls_value = {
      index: this.index,
      title: value,
      fifth_level_steps: []
    };
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.push(fthls_value);
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].addFthls = !this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].addFthls;
    this.userService.updateFirstLevelSteps(this.user).subscribe(
      user => user
    );
  }

  updateFourthStep(value, i, index, ind) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.forEach(tls => {
      if (tls.editedFthls) {
        tls.title = value;
        tls.editedFthls = !tls.editedFthls;
      }
    });
    this.userService.updateFirstLevelSteps(this.user).subscribe(goal => goal);
  }

  deleteFthls(tls, i, index, ind, ind4) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps.splice(ind4, 1);
    this.userService.updateFirstLevelSteps(this.user).subscribe(user => user);
  }

  addFifthStep(value, i, index, ind, ind4) {
    const fthls_value = {
      index: this.index,
      title: value,
      fifth_level_steps: []
    };
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.push(fthls_value);
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].addFithls = !this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].addFithls;
    this.userService.updateFirstLevelSteps(this.user).subscribe(
      user => user
    );
  }

  updateFifthStep(value, i, index, ind, ind4) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.forEach(tls => {
      if (tls.editedFithls) {
        tls.title = value;
        tls.editedFithls = !tls.editedFithls;
      }
    });
    this.userService.updateFirstLevelSteps(this.user).subscribe(goal => goal);
  }

  deleteFithls(tls, i, index, ind, ind4, ind5) {
    this.first_level_steps[i].second_level_steps[index].third_level_steps[ind].fourth_level_steps[ind4].fifth_level_steps.splice(ind5, 1);
    this.userService.updateFirstLevelSteps(this.user).subscribe(user => user);
  }
}
