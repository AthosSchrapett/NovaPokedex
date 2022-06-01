import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Authentication } from "../models/authentication.model";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
    ){}

    endpoint: string = environment.novaPokedexApi + "/login/";

    postLogin(data: Authentication): Observable<Authentication> {
      return this.httpClient.post<Authentication>(this.endpoint, data).pipe();
    }
}
