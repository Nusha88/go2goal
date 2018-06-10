import {Goals} from './goals';
import {TodoListModel} from './todolist.model';

export class UserModel {
  constructor(
    public _id: string,
    public username: string,
    public password: string,
    public email: string,
    public goals?: Goals,
    public todoLists?: TodoListModel,
    public notes?: any,
    public posts?: any,
  ) {}

}

