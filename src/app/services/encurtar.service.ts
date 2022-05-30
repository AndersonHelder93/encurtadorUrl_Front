import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CodigoEncurtadoType } from 'src/types/codigoEncurtado';
import { EncurtarType } from 'src/types/url';

@Injectable({
  providedIn: 'root'
})
export class EncurtarService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = environment.backendURL

  encurtarUrl(reqBody: EncurtarType) {

    const token = localStorage.getItem("authToken")

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token? token : ""
      })
    }

    this.httpClient.post(this.url+"/encurtar",reqBody, httpOptions ).subscribe((response: any) => { console.log(response) })
  }

  consumirUrlEncurtada(reqBody: CodigoEncurtadoType){
    return this.httpClient.post(this.url+"/consumir",reqBody).subscribe((response: any) => response?.urlOriginal)
  }

}
