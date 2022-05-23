import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  endpoint: string = environment.novaPokedexApi + "/user/";

    userGet() {
        return axios.get(this.endpoint)
            .then(resp => { return resp.data });
    }

}
