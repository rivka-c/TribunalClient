import { inject, Injectable, signal } from '@angular/core';
import { Case } from '../models/case';
import { catchError, EMPTY, map } from 'rxjs';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  cases = signal<Case[]>([]);
  private http = inject(HttpClient);
  constructor() { }

  getCases() {
    this.http
    .get<any>(environment.apiUrl + `/Cases/GetCases`)
    .pipe(
        catchError((err: any) => {
          console.error(err);
          return EMPTY
        }),
        map(data => {
          return data
        })
        
      )
      .subscribe((data: any) => {
        this.cases.set(data);
      });
     
  }
}