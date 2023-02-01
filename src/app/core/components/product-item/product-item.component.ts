import { Product } from './../../model/Product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() Product: Product;

  constructor() {
    this.Product = {
      id: 1,
      title: '',
      image: '',
      price: 0,
      category: '',
      description: '',
      rating: {
        count: 0,
        rate: 0,
      },
    };
  }

  ngOnInit(): void {}
}
