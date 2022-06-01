import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  endpoint: string = environment.novaPokedexApi + "/user/";

    // userGet() {
    //     return axios.get(this.endpoint)
    //         .then(resp => { return resp.data });
    // }

    userGet(): Observable<User> {
      return this.httpClient.get<User>(this.endpoint).pipe(retry(1));
    }

}
