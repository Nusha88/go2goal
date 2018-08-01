import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goal-of-week',
  templateUrl: './goal-of-week.component.html',
  styleUrls: ['./goal-of-week.component.scss']
})
export class GoalOfWeekComponent implements OnInit {

  from: any;
  user: any;
  to: any;
  goal: any;
  isEdited = false;
  goals_of_year: any;
  @Input() goalsOfWeek: any;
  datesW: any;

  addGoalOfWeekForm: FormGroup;

  constructor( public userService: UserService) {
    this.goalsOfWeek = [];
    this.datesW = [];
  }

  addDates(from, to) {
    let dates = {
      'from': from,
      'to': to
    };
    this.datesW.push(dates);
    // this.user.datesW = this.datesW;
    this.userService.updateUserDatesWeek(this.user).subscribe(user => user);
  }

  updateDates(from, to) {

    this.datesW[0].from = from;
    this.datesW[0].to = to;
    this.user.datesW = this.datesW;
    this.userService.updateUserDatesWeek(this.user).subscribe(user => user);
    this.isEdited = false;
  }

  private initForm() {
    const title = '';

    this.addGoalOfWeekForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'completed': new FormControl(false),
      'isEdited': new FormControl(false)
    });
  }
  addGoalOfWeek(value: any) {
    this.goal = {
      'completed': false,
      'isEdited': false,
      'title': value.title
    };
    this.goalsOfWeek.push(this.goal);
    this.user.goals_of_the_week = this.goalsOfWeek;
    this.userService.updateGoalsOfWeek(this.user).subscribe(user => user);
    this.addGoalOfWeekForm.reset();
  }

  updateGoal(goal, isChecked) {
    goal.complete = isChecked;
    this.userService.updateGoalsOfWeek(this.user).subscribe(user => user);
  }
  editGoal(goal) {
    goal.isEdited = !goal.isEdited;
  }

  updateGoalTitle(value, goal) {
    goal.title = value;
    goal.isEdited = false;
    this.userService.updateGoalsOfWeek(this.user).subscribe(user => user);
  }

  deleteGoal(i) {
    this.goalsOfWeek.splice(i, 1);
    this.user.goals_of_the_week = this.goalsOfWeek;
    this.userService.updateGoalsOfWeek(this.user).subscribe(user => user);
  }

  editDate(date) {
    this.isEdited = true;
    console.log('date', date);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      users.forEach((user) => {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername === user.username) {
            this.user = user;
            this.datesW = this.user.datesW;
            this.goalsOfWeek = this.user.goals_of_the_week;
          }
        }
      );
    });
    this.initForm();
  }
}
