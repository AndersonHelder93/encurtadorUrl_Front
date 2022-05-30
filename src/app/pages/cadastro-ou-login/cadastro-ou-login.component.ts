import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioType } from 'src/types/usuario';

@Component({
  selector: 'app-cadastro-ou-login',
  templateUrl: './cadastro-ou-login.component.html',
  styleUrls: ['./cadastro-ou-login.component.scss']
})
export class CadastroOuLoginComponent {

  constructor(
      private usuarioService: UsuarioService,
      private router: Router
    ) { }

  login = {
    login: "",
    password: ""
  }

  cadastro = {
    login: "",
    password: "",
    password2: ""
  }

  erroLogin = false
  erroCadastro = false

  fazerCadastro() {

    if(this.cadastro.login == '' || this.cadastro.password == '' || this.cadastro.password2 == '')
      return this.erroCadastro = true

    if(this.cadastro.password !== this.cadastro.password2)
      return this.erroCadastro = true

    const reqBody: UsuarioType = {
      login: this.cadastro.login,
      password: this.cadastro.password
    }

    console.log(this.cadastro)
    return this.usuarioService.fazerCadastro(reqBody)
  }

  fazerLogin() {

    if(this.login.login == '' || this.login.password == '')
      return this.erroLogin = true

    const reqBody: UsuarioType = {
      login: this.login.login,
      password: this.login.password
    }

    console.log(this.login)
    this.usuarioService.fazerLogin(reqBody)

    return this.router.navigate(['/'])
  }

}
