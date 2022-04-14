import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cotacao } from 'src/app/models/cotacao';
import { MoedaCotacaoService } from '../moeda-cotacao.service';

@Injectable()
export class MoedaCotacaoServiceOlindaapi implements MoedaCotacaoService {

  private readonly URL_COTACAO: string = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata';

  constructor(private httpClient: HttpClient) { }

  getByCotacaoMoeda(): Observable<Cotacao[]> {
    let parametroData = this.formatDate(new Date())
    return this.httpClient
      .get<Root>(`${this.URL_COTACAO}/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${parametroData}'&$top=1&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
      .pipe(map(x => {
        return (x.value || []).map(t => {
          return {
            nome: 'Dólar Americano/Real Brasileiro',
            compra: t.cotacaoCompra,
            venda: t.cotacaoVenda,
            data: new Date(t.dataHoraCotacao)
          } as Cotacao
        })
      }));
  }

  getByCotacaoPeriodo(periodoInicial: Date, periodoFinal: Date): Observable<Cotacao[]> {
    let parametroInicial = this.formatDate(periodoInicial)
    let parametroFinal = this.formatDate(periodoFinal)

    return this.httpClient
      .get<Root>(`${this.URL_COTACAO}/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${parametroInicial}'&@dataFinalCotacao='${parametroFinal}'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
      .pipe(map(x => {
        return (x.value || []).map(t => {
          return {
            nome: 'Dólar Americano/Real Brasileiro',
            compra: t.cotacaoCompra,
            venda: t.cotacaoVenda,
            data: new Date(t.dataHoraCotacao)
          } as Cotacao
        })
      }));
  }

  private formatDate(date: Date) {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}-${date.getFullYear()}`
  }
}

interface Root {
  "@odata.context": string
  value: Value[]
}

interface Value {
  cotacaoCompra: number
  cotacaoVenda: number
  dataHoraCotacao: string
}
