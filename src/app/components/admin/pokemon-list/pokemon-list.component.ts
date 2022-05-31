import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, pluck, takeWhile } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemons: Pokemon[] = [];
  listening = true;

  constructor(
    private pokemonService: PokemonService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnDestroy(): void {
    this.listening = false;
  }

  ngOnInit(): void {
    this.buscarPokemons();
  }

  buscarPokemons() {
    this.pokemonService.pokemonHttpGet()
    .pipe(takeWhile(() => this.listening))
        .subscribe(
          (res) => {
            this.pokemons = res;
          }
    )
  }

}
