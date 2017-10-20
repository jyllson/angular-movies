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

  public search($term){
    const foundMovies = this.movies.filter((movie: Movie) => {
      return movie.name.toLowerCase().includes($term.toLowerCase());
    });

    if (foundMovies.length === 0) {
      return Observable.throw($term);
    }

    return Observable.of(foundMovies);
  }
}
