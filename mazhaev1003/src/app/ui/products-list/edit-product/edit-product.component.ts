import {Component, Inject, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../../shared/product.model";
import {AddProductDialog} from "../../add-product/add-product.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;

  @Output() editProduct =
    new EventEmitter<Product>();
  @Output() deleteProduct =
    new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProductDialog, {
      width: '350px',
      data: {product: this.product}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result){
        result.id = this.product.id;
        this.edit(result);
      }
    });
  }

  edit(product: Product){
    this.editProduct.emit(product);
  }
  onDeleteWorker(id: number) {
    this.deleteProduct.emit(id);
  }
}

@Component({
  selector: 'edit-product-dialog',
  templateUrl: 'edit-product-dialog.html',
})
export class EditProductDialog implements OnInit{

  editProductForm: FormGroup;

  getErrorMessage(str: string) {
    if (this.editProductForm.controls[str].hasError('required')) {
      return 'You must enter a value';
    } else if (this.editProductForm.controls[str].hasError('min') ) {
      return 'Enter positive value';
    }
  }

  constructor(
    public dialogRef: MatDialogRef<AddProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) {}
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  product: Product = this.data.product;

  ngOnInit(): void {
    this.editProductForm = this.fb.group({
      name: [this.product.name, Validators.required],
      quantity: [this.product.quantity, [Validators.required, Validators.min(1)]],
      isBought: [this.product.isBought, Validators.required],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
