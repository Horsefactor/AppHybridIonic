import { Injectable } from '@angular/core';
import { Note } from './note-list/note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  notes: Note[];
  private dataUrl = 'http://localhost:8888/v1/collection/Note';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(`${this.dataUrl}`);
  }
  addNotes(note: Note){

    const body: Note = {
      NoteId: note.NoteId,
      Author: note.Author,
      Content: note.Content
    };
    console.log(body);

    return this.http.post(`${this.dataUrl}`, note);
  }
  deleteNote(id: number){
    console.log(id);
    return this.http.delete<Note[]>(`${this.dataUrl}?NoteIdToDelete=${id}`);
  }
  patchNote(note: Note){
    return this.http.patch(`${this.dataUrl}`, note);
  }
  getNote(id: number): Observable<Note>{
    return this.http.get<Note>(`${this.dataUrl}?NoteIdToGet${id}`);
  }
}

