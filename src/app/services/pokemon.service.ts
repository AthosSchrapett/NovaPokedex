import { Injectable } from '@angular/core';
import axios from "axios";
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon/pokemon.model';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
  ) { }

  endpoint: string = environment.pokeApi + "/pokemon/";

    pokemonGet() {
        return axios.get(this.endpoint)
            .then(resp => { return Promise.resolve(resp.data.results) });
    }
}
