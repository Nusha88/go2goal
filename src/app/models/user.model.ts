import {Todo} from './todo.model';
import {Goals} from './goals';

export class UserModel {
  constructor(
    public _id: string,
    public username: string,
    public password: string,
    public email: string,
    public goals?: Goals,
    public todos?: Todo,
    public notes?: any,
    public posts?: any,
  ) {}

}

