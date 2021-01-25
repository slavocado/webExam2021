import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() addProduct =
    new EventEmitter<Product>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialog, {
      width: '350px',
      data: {heading: 'Add worker'}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.isBought = false;
      // console.log(result);
      this.submit(result);
    });
  }

  submit(product: Product){
    this.addProduct.emit(product);
  }
}

@Component({
  selector: 'add-product-dialog',
  templateUrl: 'add-product-dialog.html',
})
export class AddProductDialog implements OnInit{

  addProductForm: FormGroup;

  getErrorMessage(str: string) {
    if (this.addProductForm.controls[str].hasError('required')) {
      return 'You must enter a value';
    } else if (this.addProductForm.controls[str].hasError('min') ) {
      return 'Enter positive value';
    }
  }

  constructor(
    public dialogRef: MatDialogRef<AddProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) {}
  // @Inject(MAT_DIALOG_DATA) public data: DialogData

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      // isBought: [false, Validators.required],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

