import { NgModule } from '@angular/core';
import { MensagemAlertaComponent } from './mensagem-alerta/mensagem-alerta.component';


@NgModule({
  declarations: [
    MensagemAlertaComponent
  ],
  exports: [
      MensagemAlertaComponent
  ]
})
export class SharedModule { }