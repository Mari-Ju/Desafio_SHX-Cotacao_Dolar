import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cotacao } from "src/app/models/cotacao";

@Injectable()
export abstract class MoedaCotacaoService {
    abstract getByCotacaoMoeda(): Observable<Cotacao[]>;
    abstract getByCotacaoPeriodo(periodoInicial: Date, periodoFinal: Date): Observable<Cotacao[]>;
}