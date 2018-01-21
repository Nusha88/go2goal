import { Injectable } from '@angular/core';

@Injectable()
export class UserFormService {

  validationMessages: any;
  // Set up errors object
  formErrors = {
    username: '',
    password: '',
    email: '',
    todosGroup: {
      id: '',
      title: '',
      complete: false
    },
    goL: ''
  };
  constructor() {
    this.validationMessages = {
      username: {
        required: `Username is <strong>required</strong>.`
      },
      password: {
        required: `Password is <strong>required</strong>.`
      },
      email: {
        required: `Start date is <strong>required</strong>.`,
        maxlength: `Invalid email`
      }
    };
  }


}
