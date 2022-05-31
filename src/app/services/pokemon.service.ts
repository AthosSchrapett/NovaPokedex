import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon/pokemon.model';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  endpoint: string = environment.pokeApi + "/pokemon/";

    pokemonHttpGet(): Observable<Pokemon[]> {
      return this.httpClient.get<any>(this.endpoint).pipe(pluck("results"));
    }

}
