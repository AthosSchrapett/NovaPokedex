import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon/pokemon.model';
import { Observable, pluck, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  endpoint: string = environment.pokeApi + "/pokemon/";

    pokemonGet(offset: number, limit: number): Observable<Pokemon[]> {
      return this.httpClient.get<any>(
          `${this.endpoint}?offset=${offset}&limit=${limit}/`
        ).pipe(pluck("results"));
    }

    pokemonGetImages(pokemonName: string): Observable<string> {
      return this.httpClient.get<any>(
        `${this.endpoint}${pokemonName}`
        ).pipe(pluck(
            "sprites",
            "other",
            "official-artwork",
            "front_default",
          ));
    }

    pokemonGetTypes(pokemonName: string): Observable<any[]> {
      return this.httpClient.get<any>(
        `${this.endpoint}${pokemonName}`
        ).pipe(pluck(
          "types"
        ));
    }
}
