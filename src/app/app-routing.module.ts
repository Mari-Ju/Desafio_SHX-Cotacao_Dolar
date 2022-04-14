import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoedaCotacaoComponent } from './modules/components/moeda-cotacao/moeda-cotacao.component';
import { CotacaoModule } from './modules/routers/cotacao.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cotacao-dolar' },
  { path: 'cotacao-dolar', component: MoedaCotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
