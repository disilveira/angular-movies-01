import { Component, OnInit } from '@angular/core';
import { MoviesStoreService } from './movies-store.service';
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
  
  constructor(private moviesService: MoviesService, private orderStore: MoviesStoreService) { }

  onInputChange(name) {

    if(this.moviesAll.length === 0){
      this.moviesAll = this.movies;
    }

    if(name.trim().length === 0){
       this.movies = this.moviesAll;
    }
    else { 
      const filter = this.movies.filter(movie => movie.title.toLowerCase().match(name));
      this.movies = filter;
    }

  }

  onSelectChange(ordering) {
    this.orderStore.addOrder(ordering);

    if(this.order == 'TitleA'){
      this.movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title ? -1 : 0)));
    }

    if(this.order == 'TitleD'){
      this.movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title ? -1 : 0))).reverse();
    }

    if(this.order == 'VoteA'){
      this.movies.sort((a,b) => (a.vote_count> b.vote_count) ? 1 : ((b.vote_count > a.vote_count ? -1 : 0)))
    }

    if(this.order == 'VoteD'){
      this.movies.sort((a,b) => (a.vote_count> b.vote_count) ? 1 : ((b.vote_count > a.vote_count ? -1 : 0))).reverse();
    }
    

  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.results;
    });

    this.orderStore.order$.subscribe(val => {
       this.order = val[0];
    });

    if(typeof this.order === 'undefined'){
      this.moviesAll = this.movies;
    }

  }

}
