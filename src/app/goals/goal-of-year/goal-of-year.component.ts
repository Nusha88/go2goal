import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-goal-of-year',
  templateUrl: './goal-of-year.component.html',
  styleUrls: ['./goal-of-year.component.scss']
})
export class GoalOfYearComponent implements OnInit {
  from: any;
  user: any;
  to: any;
  goal: any;
  isEdited = false;
  goals_of_year: any;
  @Input() goalsOfYear: any;
  datesY: any;

  addGoalOfYearForm: FormGroup;

  constructor(public userService: UserService) {
    this.goalsOfYear = [];
    this.datesY = [];
  }

  addDates(from, to) {
    let dates = {
      'from': from,
      'to': to
    };
    this.datesY.push(dates);
    this.user.dates = this.datesY;
    this.userService.updateUserDatesYear(this.user).subscribe(user => user);
  }

  updateDates(from, to) {

    this.datesY[0].from = from;
    this.datesY[0].to = to;
    this.user.datesY = this.datesY;
    this.userService.updateUserDatesYear(this.user).subscribe(user => user);
    this.isEdited = false;
  }

  private initForm() {
    const title = '';

    this.addGoalOfYearForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'completed': new FormControl(false),
      'isEdited': new FormControl(false)
    });
  }

  addGoalOfYear(value: any) {
    this.goal = {
      'completed': false,
      'isEdited': false,
      'title': value.title
    };
    this.goalsOfYear.push(this.goal);
    this.user.goals_of_the_year = this.goalsOfYear;
    this.userService.updateGoalsOfYear(this.user).subscribe(user => user);
    this.addGoalOfYearForm.reset();
  }

  updateGoal(goal, isChecked) {
    goal.complete = isChecked;
    this.userService.updateGoalsOfYear(this.user).subscribe(user => user);
  }

  editGoal(goal) {
    goal.isEdited = !goal.isEdited;
  }

  updateGoalTitle(value, goal) {
    goal.title = value;
    goal.isEdited = false;
    this.userService.updateGoalsOfYear(this.user).subscribe(user => user);
  }

  deleteGoal(i) {
    this.goalsOfYear.splice(i, 1);
    this.user.goals_of_the_year = this.goalsOfYear;
    this.userService.updateGoalsOfYear(this.user).subscribe(user => user);
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
            this.datesY = this.user.datesY;
            this.goalsOfYear = this.user.goals_of_the_year;
          }
        }
      );
    });
    this.initForm();
  }

}
