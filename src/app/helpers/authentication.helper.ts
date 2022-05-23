import { Injectable } from "@angular/core";
import { Authentication } from "../models/authentication.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {

    auth_user: string = 'AUTHENTICATION_USER';

    signIn(auth: Authentication): void {
        let json = JSON.stringify(auth);
        localStorage.setItem(this.auth_user, json);
    }

    signOut(): void {
        localStorage.removeItem(this.auth_user);
    }

    get(): Authentication | null {
        let auth = localStorage.getItem(this.auth_user);
        if (auth != null)
            return JSON.parse(auth) as Authentication;
        return null;
    }
}
