import { Product } from './../../../core/model/Product';
import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] | any = [];
  total: number = 20;
  limit: number = 12;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts(this.limit);
  }

  getProducts(limit: number) {
    this.productsService.products(limit).subscribe((products) => {
      this.products = products;
    });
  }

  reShow(event: any) {
    if (event.page === 1) {
      this.productsService.products(this.total).subscribe((products) => {
        products.splice(0, this.limit);
        this.products = products;
      });
    } else {
      this.getProducts(this.limit);
    }
  }
}
