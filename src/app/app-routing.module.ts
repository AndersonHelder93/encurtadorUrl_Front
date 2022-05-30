import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroOuLoginComponent } from './pages/cadastro-ou-login/cadastro-ou-login.component';
import { ConsumirUrlComponent } from './pages/consumir-url/consumir-url.component';
import { EncurtarComponent } from './pages/encurtar/encurtar.component';

const routes: Routes = [
  { path: 'user', component: CadastroOuLoginComponent},

  { path: 'url',
    children: [
      { path: '**', component: ConsumirUrlComponent }
    ]},

  { path: '', component: EncurtarComponent },

  { path: '**', component: EncurtarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
