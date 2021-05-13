import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { SearchComponent } from './search/search.component';
import { MoviesModule } from "./movies/movies.module";

@NgModule({
  declarations: [AppComponent, MoviesComponent, MovieItemComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
