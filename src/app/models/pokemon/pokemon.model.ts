import { PokemonInfo } from "./pokemonInfo.model";

export class Pokemon {
  name: string = "";
  url: string = "";
  imageUrl: string = "";
  pokemonInfo = new PokemonInfo();
}
