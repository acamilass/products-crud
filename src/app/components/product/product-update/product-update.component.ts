import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    }, () => {
      this.productService.showMessage('Ocorreu um erro!');
    });
  }

  updateProduct(): void {
    this.productService.edit(this.product).subscribe(() => {
      this.productService.showMessage('Produto alterado com sucesso!');
      this.router.navigate(['products']);
    }, () => {
      this.productService.showMessage('Ocorreu um erro!');
    })
  }

  cancel(): void {
    this.router.navigate(['products']);
  }

}
