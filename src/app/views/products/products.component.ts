import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/services/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.header = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routerLink: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToCreateProduct() {
    this.router.navigate(['products/create']);
  }
}
