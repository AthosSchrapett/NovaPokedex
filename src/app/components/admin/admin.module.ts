import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(AdminRoutes)
  ],
  providers: [
  ]
})
export class AdminModule { }
