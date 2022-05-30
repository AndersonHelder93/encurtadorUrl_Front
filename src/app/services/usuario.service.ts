import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EncurtarType } from 'src/types/url';
import { UsuarioType } from 'src/types/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  url = environment.backendURL

  fazerCadastro(reqBody: UsuarioType) {
    this.httpClient.post(this.url+"/usuario/cadastrar",reqBody).subscribe((response: any) => { console.log(response) });
  }

  fazerLogin(reqBody: UsuarioType) {
    this.httpClient.post(this.url+"/usuario/login", reqBody).subscribe((response: any) => {
      console.log(response)
      localStorage.setItem("authToken",response.token)
      console.log(localStorage.getItem("authToken"))
    });
  }

}
