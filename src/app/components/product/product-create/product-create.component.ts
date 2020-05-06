import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: '',
    price: null
  }

  constructor(private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['products']);
    }, () => {
      this.productService.showMessage('Ocorreu um erro!');
    })
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
