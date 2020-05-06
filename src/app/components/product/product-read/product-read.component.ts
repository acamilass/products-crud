import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  public products: Product[];
  public displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(this.products);
    });
  }

  deleteProduct(id: string) {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto apagado com sucesso!');
      this.getProducts();
    }, () => {
      this.productService.showMessage('Ocorreu um erro!');
    });
  }

}
