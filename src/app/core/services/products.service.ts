import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'https://fakestoreapi.com';
  
  constructor(private http: HttpClient) { }

  products(limit:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/products`,{params:{limit}});
  }

  product(id:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/products/${id}`);
  }

  deleteProduct(id:number): Observable<Product[]>{
    return this.http.delete<Product[]>(`${this.url}/products/${id}`);
  }

  addProduct(product:Product): Observable<Product[]>{
    return this.http.post<Product[]>(`${this.url}/products`, product);

  }

}
