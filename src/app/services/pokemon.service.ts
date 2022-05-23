import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  endpoint: string = environment.pokeApi + "/pokemon/";

    pokemonGet() {
        return axios.get(this.endpoint)
            .then(resp => { return resp.data });
    }

}
