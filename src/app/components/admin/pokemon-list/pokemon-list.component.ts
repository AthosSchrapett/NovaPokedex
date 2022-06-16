import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, Observable, pluck, takeWhile } from 'rxjs';
import { PokemonInfo } from 'src/app/models/pokemon/pokemonInfo.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemons: Pokemon[] = [];
  pagina : number = 1;
  contador : number = 30;
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
    this.spinner.show();

    this.pokemonService.pokemonGet(0, 60)
      .pipe(takeWhile(() => this.listening))
          .subscribe(
            (res) => {
              this.pokemons = res;
              this.pokemons.forEach(pokemon => {
                this.pokemonService.pokemonGetImages(pokemon.name)
                  .pipe(takeWhile(() => this.listening))
                    .subscribe((res) => {
                      pokemon.imageUrl = res;
                  });
                this.pokemonService.pokemonGetTypes(pokemon.name)
                  .pipe(takeWhile(() => this.listening))
                    .subscribe((res) => {
                      pokemon.pokemonInfo = new PokemonInfo();
                      pokemon.pokemonInfo.types = new Array();

                      pokemon.pokemonInfo.types.push(res[0].type.name)
                      if(res[1] != undefined)
                        pokemon.pokemonInfo.types.push(res[1].type.name)
                    })
              })

              this.spinner.hide();
            }
    )
  }



}
