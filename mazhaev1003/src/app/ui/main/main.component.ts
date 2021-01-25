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
      console.log(this.products)
      this.products.sort(function(a,b){
        return (a.isBought === b.isBought)? 0 : a.isBought? 1 : -1;
      })
    } catch (e) {
      console.error(e)
    }
  }

}
