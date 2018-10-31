import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'movies', component: MoviesListComponent },
            { path: '', redirectTo: '/characters', pathMatch: 'full' }
          ])
    ]
})

export class MoviesRoutingModule { }