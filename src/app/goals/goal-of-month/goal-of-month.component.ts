import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-goal-of-month',
  templateUrl: './goal-of-month.component.html',
  styleUrls: ['./goal-of-month.component.scss']
})
export class GoalOfMonthComponent implements OnInit {

  from: any;
  user: any;
  to: any;
  goal: any;
  isEdited = false;
  goals_of_year: any;
  @Input() goalsOfMonth: any;
  datesM: any;

  addGoalOfMonthForm: FormGroup;

  constructor( public userService: UserService) {
    this.goalsOfMonth = [];
    this.datesM = [];
  }

  addDates(from, to) {
    let dates = {
      'from': from,
      'to': to
    };
    this.datesM.push(dates);
    this.userService.updateUserDatesMonth(this.user).subscribe(user => user);
  }

  updateDates(from, to) {

    this.datesM[0].from = from;
    this.datesM[0].to = to;
    this.user.datesM = this.datesM;
    this.userService.updateUserDatesMonth(this.user).subscribe(user => user);
    this.isEdited = false;
  }

  private initForm() {
    const title = '';

    this.addGoalOfMonthForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'completed': new FormControl(false),
      'isEdited': new FormControl(false)
    });
  }
  addGoalOfMonth(value: any) {
    this.goal = {
      'completed': false,
      'isEdited': false,
      'title': value.title
    };
    this.goalsOfMonth.push(this.goal);
    this.user.goals_of_the_month = this.goalsOfMonth;
    this.userService.updateGoalsOfMonth(this.user).subscribe(user => user);
    this.addGoalOfMonthForm.reset();
  }

  updateGoal(goal, isChecked) {
    goal.complete = isChecked;
    this.userService.updateGoalsOfMonth(this.user).subscribe(user => user);
  }
  editGoal(goal) {
    goal.isEdited = !goal.isEdited;
  }

  updateGoalTitle(value, goal) {
    goal.title = value;
    goal.isEdited = false;
    this.userService.updateGoalsOfMonth(this.user).subscribe(user => user);
  }

  deleteGoal(i) {
    this.goalsOfMonth.splice(i, 1);
    this.user.goals_of_the_month = this.goalsOfMonth;
    this.userService.updateGoalsOfMonth(this.user).subscribe(user => user);
  }

  editDate(date) {
    this.isEdited = true;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      users.forEach((user) => {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername === user.username) {
            this.user = user;
            this.datesM = this.user.datesM;
            this.goalsOfMonth = this.user.goals_of_the_month;
          }
        }
      );
    });
    this.initForm();
  }


}
