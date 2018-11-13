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
  noNotes: boolean;

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
          if (this.notes.length > 0) {
            this.noNotes = false;
          } else {
            this.noNotes = true;
          }
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
    this.noNotes = false;
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
    if (this.notes.length > 0) {
      this.noNotes = false;
    } else {
      this.noNotes = true;
    }
  }

  private initForm() {
    const note = '';

    this.addNoteForm = new FormGroup({
      'note': new FormControl(note, Validators.required),
      'edited': new FormControl(false)
    });
  }
}
