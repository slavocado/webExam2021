import { Component, OnInit } from '@angular/core';
import {Product, ProductsDataBase} from "../../shared/worker.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = ProductsDataBase;

  displayedColumns: string[] = ['id', 'name', 'quantity', 'isBought'];

  constructor() { }

  ngOnInit(): void {
  }

}
