import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent
   },
];
