import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento-page',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public proximaPagina () :void {
    if (window.location.href.includes('forma-pagamento')) {
      // verificar qual forma de pagamento está selecionada
      this.router.navigate(['/pagamento/cartao']);
    } else {
      this.router.navigate(['/pagamento/forma-pagamento']);
    }
  }
}
