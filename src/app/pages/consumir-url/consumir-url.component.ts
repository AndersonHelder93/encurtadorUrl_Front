import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncurtarService } from 'src/app/services/encurtar.service';

@Component({
  selector: 'app-consumir-url',
  templateUrl: './consumir-url.component.html',
  styleUrls: ['./consumir-url.component.scss']
})
export class ConsumirUrlComponent implements OnInit {

  constructor(
    private encurtarService: EncurtarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const codigoEncurtado = this.router.url.replace(/^\/url\//,"")

    console.log(codigoEncurtado)

    const urlOriginal = this.encurtarService.consumirUrlEncurtada({ codigo: codigoEncurtado })

    this.router.navigate([urlOriginal])
  }

}
