import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[];

  @Output() editProduct =
    new EventEmitter<Product>();

  displayedColumns: string[] = ['id', 'name', 'quantity', 'isBought', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

  onEditProduct(product: Product) {
    this.editProduct.emit(product);
  }

}
