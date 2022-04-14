import { Component, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mensagem-alerta',
  templateUrl: './mensagem-alerta.component.html',
  styleUrls: ['./mensagem-alerta.component.css']
})
export class MensagemAlertaComponent implements OnInit {

  @Input() title: string;

  @Input() mensagem: string;

  constructor(private bsModalRef: BsModalRef) {
    this.title = ''; 
    this.mensagem = '';
  }

  ngOnInit(): void {
  }

  onClose(){
    this.bsModalRef.hide();
  }
}
