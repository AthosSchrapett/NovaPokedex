import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Array<Pokemon> = new Array();

  constructor(
    private pokemonService: PokemonService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.buscarPokemons();
  }

  async buscarPokemons() {
    await this.pokemonService.pokemonGet().then(
      (data: Array<Pokemon>) => {
        this.pokemons = data;
      }
    ).catch((e) => {
      console.log(e)
    })

    this.pokemons.forEach(element => {
      console.log(element.name)
    });
  }

}
