import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
  
})

export class HomeComponent  implements OnInit{
  products: Array<Product[]> | any = [];
  loading: boolean = false;
  display: boolean = false;
  productForm: FormGroup = this.fb.group({});
  waiting: boolean = false;

  constructor(private productsService:ProductsService,private fb: FormBuilder,private messageService: MessageService){}

  ngOnInit(): void {
    this.getProducts();
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  getProducts(){
    this.loading = true;
    this.productsService.products(20).subscribe(products=>{
      this.products = products;
      this.loading = false;
    })
  }

  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe((product:any)=>{
      let n = this.products.findIndex((p: any)=>p.id === product.id);
      n != -1 ? this.products.splice(n,1):null;
      return this.products;
    })
  }

  addProduct(){
    this.waiting = true;
    let value = this.productForm.value;
    
    if (this.productForm.valid) {
      this.productsService.addProduct(value).subscribe((product:any)=>{
        this.showSuccess(product.title);
      });
      setTimeout(() => {
        this.waiting = false;
      }, 1000);
    }
    
  }

  showSuccess(title: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: `${title} added`});
}

  showDialog() {
    this.display = true;
  }
}
