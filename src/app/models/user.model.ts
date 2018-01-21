import {Todo} from './todo.model';

export class UserModel {
  constructor(
    public _id: string,
    public username: string,
    public password: string,
    public email: string,
    public goL?: string,
    public todos?: Array<Todo>,
  ) {}

}
