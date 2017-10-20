import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

}
