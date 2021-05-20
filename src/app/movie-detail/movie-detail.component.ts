import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId: Number;
  movie: any = {};
  
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.movieId = params["id"];
    });

    this.moviesService.getMovieDetail(this.movieId).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    });
  }

}
