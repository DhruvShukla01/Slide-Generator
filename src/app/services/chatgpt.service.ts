import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  private apiUrl = '/api/chatbot';  // URL to your backend endpoint

  constructor(private http: HttpClient) {}

  generateSlides(prompt: string): Observable<any> {
    return this.http.post(this.apiUrl, { message: prompt })  // Changed 'prompt' to 'message' to match server
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
