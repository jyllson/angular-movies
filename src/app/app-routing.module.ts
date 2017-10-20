import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './search/search/search.component';

const appRoutes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'search/:searchTerm', component: SearchComponent }
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
