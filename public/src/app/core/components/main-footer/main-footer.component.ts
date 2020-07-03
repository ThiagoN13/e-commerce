import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/core/config/app-config';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent implements OnInit {
  APP_TITLE = APP_TITLE;

  constructor() {}

  ngOnInit(): void {}
}
