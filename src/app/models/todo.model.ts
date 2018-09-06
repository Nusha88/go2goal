export class Todo {

  constructor(
    public _id: string,
    public title: string,
    public isEdited: boolean,
    public complete: boolean
  ) {}
}
