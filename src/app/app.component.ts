import { Component, OnInit } from '@angular/core';
import { MoviesStoreService } from './movies/movies-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Movies App";
  
  constructor(
    private moviesStore: MoviesStoreService
  ) { }

  ngOnInit(): void {
  }
}
