import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  addNoteForm: FormGroup;
  notes: any;
  noteObj: any;
  user: any;
  id: any;

  constructor(public service: UserService) {
    this.notes = [];
  }

  ngOnInit() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername === user.username) {
          this.user = user;
          this.id = this.user._id;
          this.notes = this.user.notes;
        }
      });
    });
    this.initForm();
  }

  addNote(value) {
    this.noteObj = {
      title: value,
      isEdited: false,
    };
    this.notes.push(this.noteObj);
    this.service.postNotes(this.noteObj, this.user._id);
    this.addNoteForm.reset();
  }

  editNote(note) {
    note.isEdited = !note.isEdited;
  }

  updateNote(value, note) {
    note.title = value;
    note.isEdited = false;
    this.service.updateNotes(this.user).subscribe(user => user);
  }

  deleteNote(note, index) {
    this.notes.splice(index, 1);
    this.service.updateNotes(this.user).subscribe(user => user);
  }

  private initForm() {
    const note = '';

    this.addNoteForm = new FormGroup({
      'note': new FormControl(note, Validators.required),
      'edited': new FormControl(false)
    });
  }
}
