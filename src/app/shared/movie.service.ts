import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';
import { Movie } from './models/movie.model';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private movies: Array<Movie>;

  public getMovies(){
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/movies')
        .subscribe(
          (movies: any[]) => {
            movies.forEach(mov => {
              this.movies.push(new Movie(mov.id, mov.name, mov.director, mov.image_url, mov.duration, mov.release_date, mov.genres));
            });

            o.next(this.movies);
            return o.complete();
          });
    });
  }

  public search(term){
    return new Observable(
      (foundMovies: Observer<any>) => {
        let m = [];

        this.movies.map((movie: Movie) => {
          if (!(movie['name'].toLowerCase().search(term.toLowerCase()) == -1)) {
            m.push(movie);
          }
        })

        if (m.length == 0) {
          foundMovies.error('No movies found.');
          console.log('No movies');
        } else {
          foundMovies.next(m);          
        }
      }
    );
  }
}
