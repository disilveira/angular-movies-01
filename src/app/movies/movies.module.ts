import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesService } from './movies.service';
import { MoviesStoreService } from './movies-store.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesService, MoviesStoreService]
})
export class MoviesModule { }
