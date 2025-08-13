import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'http://localhost:8080/api/email'; // adapte à ton port backend

  constructor(private http: HttpClient) {}

  sendInvoice(to: string, subject: string, body: string) {
    const params = new HttpParams()
      .set('to', to)
      .set('subject', subject)
      .set('body', body);

    return this.http.post(`${this.baseUrl}/send`, null, {
      params,
      responseType: 'text',
    });
  }
}
