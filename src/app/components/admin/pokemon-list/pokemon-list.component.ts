import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = new MatTableDataSource<Pokemon>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    // this.buscarPokemons();
  }

  buscarPokemons(): void {

    let pokemons: Array<Pokemon> = [];

    this.pokemonService.pokemonGet().then(
      (data: Array<Pokemon>) => {
        this.pokemons.data = data;
      }
    )

    console.log(this.pokemons.data);
  }

}
