import { Injectable } from '@angular/core';
import { MovieList } from './examples';
import { Observable, Observer } from 'rxjs';
import { Movie } from './models/movie.model';

@Injectable()
export class MovieService {

  constructor() { }

  private movies: Array<Movie>;

  public getMovies(){
  	this.movies = MovieList.map(
  		movie => new Movie(
  			movie.id, 
  			movie.name, 
  			movie.director,
  			movie.imageUrl,
  			movie.duration,
  			movie.releaseDate,
  			movie.genres
  		)
  	);
    return new Observable((o: Observer<any>) => {
      setTimeout(() => {
        o.next(this.movies);
      }, 2000);
    });
  }
}
