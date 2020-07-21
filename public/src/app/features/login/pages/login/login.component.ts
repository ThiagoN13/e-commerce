import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';
import { LoginService } from '../../services/login/login.service';
// import { LoginFormFields } from '../../components/login-form/login-form.component';
import { ApiResponse, ContentState } from 'src/app/core/models/api-response';
import { HttpErrorResponse } from '@angular/common/http';
import { Api422Response } from 'src/app/core/models/api-422-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
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
