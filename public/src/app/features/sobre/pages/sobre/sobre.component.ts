import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';
import { Api422Response } from 'src/app/core/models/api-422-response';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobrePageComponent implements OnInit {
  APP_TITLE = APP_TITLE;
  error: string;
  validationErrors: Api422Response;
  loading: boolean;

  constructor() {}

  ngOnInit(): void {}

  public sobreFormSubmitted() {
    this.loading = true;

  }
}
