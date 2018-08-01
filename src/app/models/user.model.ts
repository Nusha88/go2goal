import {FirstLevelSteps, GoalOfLife} from './goals';
import {TodoListModel} from './todolist.model';
import {NoteModel} from './note.model';
import { DatesM, DatesW, DatesY, GoalOfTheMonthModel, GoalOfTheWeekModel, GoalOfTheYearModel} from './goal-of-the-year.model';
import {Posts} from './posts';

export class UserModel {
  constructor(
    public _id: string,
    public username: string,
    public password: string,
    public email: string,
    public todoLists?: TodoListModel,
    public notes?: NoteModel,
    public posts?: Posts,
    public datesY?: DatesY,
    public datesM?: DatesM,
    public datesW?: DatesW,
    public goal_of_live?: GoalOfLife,
    public first_level_steps?: FirstLevelSteps,
    public goals_of_the_year?: GoalOfTheYearModel,
    public goals_of_the_month?: GoalOfTheMonthModel,
    public goals_of_the_week?: GoalOfTheWeekModel,
  ) {}

}

