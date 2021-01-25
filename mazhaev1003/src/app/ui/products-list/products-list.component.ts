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
  @Output() deleteProduct =
    new EventEmitter<number>();

  displayedColumns: string[] = [ 'isBought', 'name', 'quantity' , 'action'];

  constructor() { }

  ngOnInit(): void {
  }

  onEditProduct(product: Product) {
    this.editProduct.emit(product);
  }

  onDeleteWorker(id: number) {
    this.deleteProduct.emit(id);
  }

  onEditProperty(event, product){
    console.log(event.checked)
    product.isBought = event.checked;
    this.onEditProduct(product)
  }

}
