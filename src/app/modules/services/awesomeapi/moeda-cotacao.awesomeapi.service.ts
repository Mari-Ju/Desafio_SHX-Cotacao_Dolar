import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cotacao } from 'src/app/models/cotacao';
import { MoedaCotacaoService } from '../moeda-cotacao.service';

@Injectable()
export class MoedaCotacaoServiceAwesome implements MoedaCotacaoService {
  private readonly URL_COTACAO: string = 'https://economia.awesomeapi.com.br/json/';
  private readonly SIMB_MOEDA: string = 'USD-BRL';

  constructor(private httpClient: HttpClient) { }

  getByCotacaoMoeda(): Observable<Cotacao[]> {
    return this.httpClient
      .get<Tick[]>(`${this.URL_COTACAO}/${this.SIMB_MOEDA}`)
      .pipe(map(x => {
        let name = (x || [{}])[0].name;
        return x.map(t => {
          return {
            nome: name,
            compra: parseFloat(t.ask),
            venda: parseFloat(t.bid),
            data: new Date(parseInt(t.timestamp) * 1000)
          } as Cotacao
        })
      }));
  }

  getByCotacaoPeriodo(periodoInicial: Date, periodoFinal: Date): Observable<Cotacao[]> {
    let parametroInicial = this.formatDate(periodoInicial);
    let parametroFinal = this.formatDate(periodoFinal);
    return this.httpClient
      .get<Tick[]>(`https://economia.awesomeapi.com.br/json/daily/${this.SIMB_MOEDA}?start_date=${parametroInicial}&end_date=${parametroFinal}`)
      .pipe(map(x => {
        let name = (x || [{}])[0].name;
        return x.map(t => {
          return {
            nome: name,
            compra: parseFloat(t.ask),
            venda: parseFloat(t.bid),
            data: new Date(parseInt(t.timestamp) * 1000)
          } as Cotacao
        })
      }));
  }

  private formatDate(date: Date) {
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`
  }
}

class Tick {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;


  constructor() {
    this.code = '';
    this.codein = '';
    this.name = '';
    this.high = '';
    this.low = '';
    this.varBid = '';
    this.pctChange = '';
    this.bid = '';
    this.ask = '';
    this.timestamp = '';
    this.create_date = '';
  }
}