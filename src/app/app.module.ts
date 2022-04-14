import { MoedaCotacaoServiceOlindaapi } from './modules/services/olindaapi/moeda-cotacao.olindaapi.service';
import { MoedaCotacaoService } from './modules/services/moeda-cotacao.service';
import { MoedaCotacaoServiceAwesome } from './modules/services/awesomeapi/moeda-cotacao.awesomeapi.service';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CotacaoModule } from './modules/routers/cotacao.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MensagemAlertaComponent } from './modules/components/modal/mensagem-alerta/mensagem-alerta.component';
import { SharedModule } from './modules/components/modal/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  entryComponents:[
    SharedModule
  ],
  providers: [
    { provide: MoedaCotacaoService, useClass: MoedaCotacaoServiceOlindaapi },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
