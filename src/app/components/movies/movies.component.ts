import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../shared/movie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MovieRowComponent } from '../../shared/movie-row/movie-row.component';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  private movies: Array<Movie>;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  	this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      
        (err: HttpErrorResponse) => {
          alert('Something went wrong!');
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        }
      );
  }

}
