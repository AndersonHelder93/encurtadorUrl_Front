import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroOuLoginComponent } from './pages/cadastro-ou-login/cadastro-ou-login.component';

import { HttpClientModule } from '@angular/common/http';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { EncurtarComponent } from './pages/encurtar/encurtar.component';
import { ConsumirUrlComponent } from './pages/consumir-url/consumir-url.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroOuLoginComponent,
    MensagemComponent,
    EncurtarComponent,
    ConsumirUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
