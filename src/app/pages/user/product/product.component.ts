import { Product } from './../../../core/model/Product';
import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: Product[] | any = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {}

  getProduct(id: number) {
    this.productsService.product(id).subscribe((product) => {
      this.product = product;
    });
  }

}
