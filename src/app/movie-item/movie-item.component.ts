import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() titulo: String;
  @Input() descricao: String;
  @Input() image: String;

  constructor() { }

  ngOnInit(): void {
  }

}
