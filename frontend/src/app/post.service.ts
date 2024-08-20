import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    });
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}posts/`, { headers: this.getHeaders() });
  }

  getComments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}comments/`, { headers: this.getHeaders() });
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}posts/`, post, { headers: this.getHeaders() });
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}posts/${id}/`, post, { headers: this.getHeaders() });
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}posts/${id}/`, { headers: this.getHeaders() });
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}comments/`, comment, { headers: this.getHeaders() });
  }

  updateComment(id: number, comment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}comments/${id}/`, comment, { headers: this.getHeaders() });
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}comments/${id}/`, { headers: this.getHeaders() });
  }
}
