export class Cotacao {

  nome: string;
  compra: number;
  venda: number;
  data: Date;

    constructor (){
      this.nome = '';
      this.compra = 0;
      this.venda = 0;
      this.data = new Date;
    }
  }