import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://ng-assignment2-default-rtdb.firebaseio.com/products.json'

  constructor(private http: HttpClient) { }

  saveProducts(products: any[]) {
    return this.http.put(this.url, products)
  }

  fetchProducts() {
    return this.http.get(this.url);
  }

  getDataTitle() {
    return this.http.get('https://ng-assignment2-default-rtdb.firebaseio.com/dataTitle.json');
  }
}
