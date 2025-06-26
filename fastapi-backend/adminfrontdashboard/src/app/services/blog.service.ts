import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = '/api/blogs'; // adjust if needed

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postBlog(blog: any): Observable<any> {
    return this.http.post(this.apiUrl, blog);
  }
}
