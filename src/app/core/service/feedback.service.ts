import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  submitFeedback(data): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post<any>('https://uiabsolute.com/rest/submitFeedback', data, { 'headers': headers });
  }

}
