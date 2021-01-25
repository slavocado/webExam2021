import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product.model";

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  routeApi = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {  }

  getProducts(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }
  postProduct(data: Product){
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteProduct(id: number){
    const url = `${this.routeApi}/${id}`
    return this.http.delete(url).toPromise();
  }

  putProduct(product: Product){
    const url = `${this.routeApi}/${product.id}`
    return this.http.put(url, product).toPromise();
  }
}
