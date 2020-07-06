import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas-page',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  public isCard: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public setVisualizacaoCard (isCard : boolean) {
    this.isCard = isCard;
  }

}
