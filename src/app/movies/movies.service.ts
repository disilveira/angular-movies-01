import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  private API_KEY = 'd416af5d4faee64e25ab001d87aab5c3';
  private BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}`);
  }

}
