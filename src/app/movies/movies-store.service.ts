import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService {

  constructor( ) { }

  private readonly _movies = new BehaviorSubject([]);
  readonly movies$ = this._movies.asObservable();

  private get movies() {
    return this._movies.getValue();
  }

  private set movies(val) {
    this._movies.next(val);
  }
  
  
}
