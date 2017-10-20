import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';


const appRoutes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
