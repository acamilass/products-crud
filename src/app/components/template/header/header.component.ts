import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.header.title;
  }

  get icon(): string {
    return this.headerService.header.icon;
  }

  get routerLink(): string {
    return this.headerService.header.routerLink;
  }
}
