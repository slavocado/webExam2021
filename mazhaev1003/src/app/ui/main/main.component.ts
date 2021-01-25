import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product.model";
import {HttpProductService} from "../../shared/services/http-product.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[];

  constructor(private httpProductService: HttpProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    try{
      this.products = await this.httpProductService.getProducts();
      this.products.sort(function(a,b){
        return (a.isBought === b.isBought)? 0 : a.isBought? 1 : -1;
      })
    } catch (e) {
      console.error(e)
    }
  }

  async onAddProduct(product: Product) {
    const id =
      this.products.length > 0
        ? this.products[this.products.length - 1].id + 1
        : 0;
    product.id = id;
    // this.workers.push(worker);

    try {
      await this.httpProductService.postProduct(product);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }

  async onEditProduct(editingProduct) {
    try {
      await this.httpProductService.putProduct(editingProduct);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }


  async onDeleteWorker(id: number) {
    try {
      await this.httpProductService.deleteProduct(id);
    } catch (e) {
      console.error(e);
    } finally {
      await this.getData();
    }
  }


}
