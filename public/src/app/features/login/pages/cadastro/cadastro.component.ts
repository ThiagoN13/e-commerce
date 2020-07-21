import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';
import { LoginService } from '../../services/login/login.service';
import { Api422Response } from 'src/app/core/models/api-422-response';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroPageComponent implements OnInit {
  APP_TITLE = APP_TITLE;
  error: string;
  validationErrors: Api422Response;
  loading: boolean;

  constructor(private readonly loginService: LoginService) {}

  ngOnInit(): void {}

  public loginFormSubmitted() {
    this.loading = true;

  }
}
