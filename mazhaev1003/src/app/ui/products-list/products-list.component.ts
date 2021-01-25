import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[];

  displayedColumns: string[] = ['id', 'name', 'quantity', 'isBought'];

  constructor() { }

  ngOnInit(): void {
  }

}
