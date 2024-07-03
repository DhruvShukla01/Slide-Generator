import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  private apiUrl = 'http://localhost:3000/generate-slides';

  constructor(private http: HttpClient) { }

  generateSlides(theme: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { theme });
  }
}