import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationHelper } from "src/app/helpers/authentication.helper";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private authenticationHelper: AuthenticationHelper,
    private router: Router
  ){}

  canActivate() {

    if(this.authenticationHelper.get()){
      return true;
    }

    this.router.navigate(['/']);
    return false;

  }
}
