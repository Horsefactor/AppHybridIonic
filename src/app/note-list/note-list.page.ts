import { Component, OnInit } from '@angular/core';

import {Note} from './note.model';
import {RestService} from 'src/app/rest.service';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {
  notes: Note[];
  constructor(
    private rest: RestService,
    private router: Router) { }

  ngOnInit() {
    this.loadNotes();
  }
  loadNotes(){
    this.rest.getAllNotes().pipe(first()).subscribe((data) => {
      console.log(data);
      this.notes = data;
    });
  }
  editNote(note: Note){
    console.log(note.NoteId);
    this.router.navigate(['edit', note.NoteId]);
  }
  deleteNote(note: Note){
    const id = note.NoteId;
    this.rest.deleteNote(id).pipe(first()).subscribe(() => this.loadNotes());
  }
}
