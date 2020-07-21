import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';
import { Api422Response } from 'src/app/core/models/api-422-response';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss'],
})
export class FaleConoscoPageComponent implements OnInit {
  APP_TITLE = APP_TITLE;
  error: string;
  validationErrors: Api422Response;
  loading: boolean;

  constructor() {}

  ngOnInit(): void {}

  public faleConoscoFormSubmitted() {
    this.loading = true;

  }
}
