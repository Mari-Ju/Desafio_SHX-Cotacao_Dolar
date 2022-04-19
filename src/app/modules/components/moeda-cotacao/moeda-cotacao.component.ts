import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cotacao } from 'src/app/models/cotacao';
import { LoaderService } from '../../services/loader.service';
import { MoedaCotacaoService } from '../../services/moeda-cotacao.service';
import { MensagemAlertaComponent } from '../modal/mensagem-alerta/mensagem-alerta.component';

@Component({
  selector: 'app-moeda-cotacao',
  templateUrl: './moeda-cotacao.component.html',
  styleUrls: ['./moeda-cotacao.component.css'],
})
export class MoedaCotacaoComponent implements OnInit {

  cotacao: Cotacao;
  moedaDolar: number = 1;
  cotacoes: Cotacao[] = [];
  periodoInicial: string;
  periodoFinal: string;
  numero1: number;
  numero2: number;
  resultado: number;
  key: string = '';
  reverse: boolean = false;
  dataFinal: string;
  dataInicial: string;
  bsModalRef?: BsModalRef;
  cotacaoAtual: number = 0;


  constructor(private router: Router,
    private moedaCotacaoService: MoedaCotacaoService,
    private loaderService: LoaderService,
    private bsModalService: BsModalService) {

    this.cotacao = new Cotacao();
    this.periodoInicial = '';
    this.periodoFinal = '';
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.dataInicial = '';
    this.dataFinal = '';
  }

  ngOnInit(): void {
    this.getByCotacao();
  }

  getByCotacao(): void {
    this.moedaCotacaoService.getByCotacaoMoeda()
      .subscribe((cotacao: Cotacao[]) => {
        this.cotacao = cotacao[0];
        console.log(this.cotacao.venda);
        this.cotacaoAtual = this.cotacao.venda;
      })
  }

  getByPeriodo() {
    const Inicio: Date = new Date(this.periodoInicial + ' 00:00:00');
    const Final: Date = new Date(this.periodoFinal + ' 00:00:00');
    if (this.checkDataInicial_Final(Inicio, Final)) {
      this.loaderService.show();
      this.moedaCotacaoService.getByCotacaoPeriodo(Inicio, Final)
        .subscribe({
          next: cotacoes => {
            this.cotacoes = cotacoes;
            this.loaderService.hide();
          },
          error: error => {
            console.error("erro ao realizar consulta", error);
            this.loaderService.hide();
          }
        });
    }
  }

  checkDataInicial_Final(dataInicial: Date, dataFinal: Date): boolean {
    if (dataFinal < dataInicial) {
      this.handleError();
      return false;
    }

    return true;
  }

  clearList() {
    this.cotacoes = [];
    this.periodoInicial = '';
    this.periodoFinal = '';
  }

  calcularCotacaoMoeda(n1: number, n2: number) {
    this.resultado = n1 * n2;
    this.numero1 = 0;
  }


  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  handleError(){
    this.bsModalRef = this.bsModalService.show(MensagemAlertaComponent);
    this.bsModalRef.content.closeBtnName = 'title';
    this.bsModalRef.content.closeBtnName = 'messagem';
  }

}


