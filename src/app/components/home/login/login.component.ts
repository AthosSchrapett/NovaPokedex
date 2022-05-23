import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Authentication } from '../../../models/authentication.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private authenticationHelper: AuthenticationHelper,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  formLogin = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formLogin.controls;
  }

  ngOnInit(): void {
    //this.buscaUsuario();
  }

  buscaUsuario(): void {
    this.spinner.show();
    this.userService.userGet().then(
      (data: User) => {
        console.log(data);
      }
    );
  }

  onSubmit(): void {
    this.spinner.show();
    this.authenticationService.postLogin(this.formLogin.value)
      .then(
        (data: Authentication) => {
          this.authenticationHelper.signIn(data);
          this.formLogin.reset();
          this.router.navigate(['/admin/pokemon-list']);
        }
      )
      .catch(
        (e) => {
          switch (e.response.status) {
            case 404: this.mensagem = e.response.data.message; break;
          }
        }
      )
      .finally(
        () => { this.spinner.hide(); }
      )
  }

}
