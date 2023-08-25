import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectedCC } from '../interfaces/selection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  apiKey = 'a0c9137b870b4b2e945bf6d0fa4211f2';

  constructor(private http: HttpClient) { }

  getNews(params: SelectedCC): Observable<any> {
    const { country, category } = params;
    const searchUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`
    return this.http.get(searchUrl);
  }

}
