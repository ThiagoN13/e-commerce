import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';
import { LoginService } from 'src/app/features/login/services/login/login.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  APP_TITLE = APP_TITLE;
  user$ = this.userService.user;

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {}

  public openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  private processLogout() {
    this.loginService.logout();
  }
}
