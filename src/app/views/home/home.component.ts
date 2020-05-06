import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.header = {
      title: 'Início',
      icon: 'home',
      routerLink: ''
    }
  }

  ngOnInit(): void {
  }

}
