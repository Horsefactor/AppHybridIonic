import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Note } from '../note-list/note.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  public note: Note;
  private id;

  constructor(private route: ActivatedRoute,
    private rest: RestService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rest.getNote(this.id).pipe(first()).subscribe(data => this.note = data);
  }
  logForm() {
    console.log(this.note);
    this.rest.patchNote(this.note);
  }
}
