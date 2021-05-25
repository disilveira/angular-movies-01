import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  moviesAll = [];
  filter = "";
  order = "";

  onInputChange(name) {

    if(this.moviesAll.length === 0){
      this.moviesAll = this.movies;
    }

    if(name.trim().length === 0)
       this.movies = this.moviesAll;
    else { 
      const filter = this.movies.filter(movie => movie.title.toLowerCase().match(name));
      this.movies = filter;
    }

  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.results;
    })
  }

}
