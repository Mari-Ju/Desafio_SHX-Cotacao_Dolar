import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoedaCotacaoComponent } from '../components/moeda-cotacao/moeda-cotacao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cotacao-dolar' },
  { path: 'cotacao-dolar', component: MoedaCotacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacaoRoutingModule { }
