import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService {

  constructor( ) { }

  private readonly _order = new BehaviorSubject([]);
  readonly order$ = this._order.asObservable();

  private get order() {
    return this._order.getValue();
  }

  private set order(val) {
    this._order.next(val);
  }
  
  addOrder(order){
    this.order = [
      order
    ];
  }

}
