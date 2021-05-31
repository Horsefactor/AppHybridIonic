import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note-list/note.model';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  note: Note;
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.note = {NoteId: 0, Author: "",Content: ""};
  }

  logForm() {
    console.log(this.note);
    this.rest.addNotes(this.note);
  }
}
