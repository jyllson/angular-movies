import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/movie.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

	private movies: Array<Movie>;
	private term: string;
	private selectedMovies: number = 0;

  constructor(
  	private movieService: MovieService,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.route.params.subscribe(() => {
      this.term = this.route.snapshot.paramMap.get('term');

      this.movieService.search(this.term)
        .subscribe(movies => {
          this.movies = movies;
        },
        err => {
        	this.term = err;
        });
    });
  }

  selectMovie(movie) {
    this.selectedMovies++;
  }

  deselectMovie(movie) {
    this.selectedMovies--;
  }

}
