import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MoedaCotacaoComponent } from '../components/moeda-cotacao/moeda-cotacao.component';
import { CotacaoRoutingModule } from './cotacao-routing.module';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    MoedaCotacaoComponent,
  ],
  imports: [
    CommonModule,
    CotacaoRoutingModule,
    FormsModule,
    OrderModule,
  ]
})
export class CotacaoModule { }