import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    endpoint: string = environment.novaPokedexApi + "/login/";

    postLogin(data: any) {
        return axios.post(this.endpoint, data)
            .then(resp => { return resp.data });
    }
}
