import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncurtarService } from 'src/app/services/encurtar.service';

@Component({
  selector: 'app-encurtar',
  templateUrl: './encurtar.component.html',
  styleUrls: ['./encurtar.component.scss']
})
export class EncurtarComponent implements OnInit {

  constructor(
    private encurtarService: EncurtarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  url: string = ""

  encurtarUrl() {

    if(!localStorage.getItem("authToken")?.length)
      return this.router.navigate(['/user'])

    return this.encurtarService.encurtarUrl({ urlOriginal: this.url })
  }

}
