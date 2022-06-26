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
  }

  buscaUsuario(): void {
    this.spinner.show();
    this.userService.userGet().subscribe(
      (res: User) => {
        console.log(res);
      }
    )
  }

  onSubmit(): void {
    this.spinner.show();
    this.authenticationService.postLogin(this.formLogin.value)
    .subscribe({
      next: (res) => {

        this.authenticationHelper.signIn(res);
        this.router.navigate(['/admin/pokemon-list']);

        this.spinner.hide();
      },
      error: (e) => {
        switch (e.status) {
          case 400:
            console.log(e)
            this.mensagem = "Usuário ou senha incorreta";
            break;
        }
        this.spinner.hide();
      }
    });
  }
}
