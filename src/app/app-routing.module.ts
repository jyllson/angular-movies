import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';


const appRoutes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    MoviesComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
