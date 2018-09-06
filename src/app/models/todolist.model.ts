import {Todo} from './todo.model';

export class TodoListModel {
  constructor(
    public _id: string,
    public title: string,
    public isEdited: boolean,
    public todos?: Todo) {
  }
}
