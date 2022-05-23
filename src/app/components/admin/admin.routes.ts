import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './Guards/admin.guard';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: PokemonListComponent
   },
];
