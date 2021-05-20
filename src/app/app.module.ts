import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { SearchComponent } from './search/search.component';
import { MoviesModule } from "./movies/movies.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, MovieItemComponent, SearchComponent, MovieDetailComponent, MovieDetailComponent],
  imports: [BrowserModule, FormsModule, MoviesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
