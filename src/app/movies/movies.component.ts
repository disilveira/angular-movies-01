import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  movies = [
    {
      titulo: 'Miraculous World:',
      descricao: 'A turma de Marinette (Cristina Valenzuela) embarca numa viagem para Nova York com o intuito de comemorar a semana franco-americana da amizade.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eHAfw4FcU6i1X8jrr8cQZtyLsmg.jpg'
    },
    {
      titulo: 'Game of Thrones',
      descricao: 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg'
    },
    {
      titulo: 'Legados',
      descricao: 'Hope Mikaelson, descendente da linhagem mais poderosa de vampiros, lobisomens e bruxas, frequenta a Escola Salvatore para Jovens e Superdotados.',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/roFJeeBbcFYCaTfmKaCQ7wtCT5l.jpg'
    },
    {
      titulo: 'Nova Ordem Espacial',
      descricao: 'Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f32ne52ClTPFL9Ew2aPUhKoVn9e.jpg'
    },
    {
      titulo: 'Vanquish',
      descricao: 'Uma mãe, Victoria, está tentando deixar seu passado sombrio como uma entregadora de drogas russa para trás, mas o policial aposentado Damon força Victoria a cumprir suas ordens, mantendo sua filha como refém.‎',
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AoWY1gkcNzabh229Icboa1Ff0BM.jpg'
    }
  ];

  filter = "";

  onInputChange(name) {
    console.log(name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
