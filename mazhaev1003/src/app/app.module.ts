import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextComponent } from './ui/text/text.component';
import { MainComponent } from './ui/main/main.component';
import { ProductsListComponent } from './ui/products-list/products-list.component';
import { AddProductComponent } from './ui/add-product/add-product.component';
import {AddProductDialog} from "./ui/add-product/add-product.component";
import { EditProductComponent } from './ui/products-list/edit-product/edit-product.component';
import {EditProductDialog} from "./ui/products-list/edit-product/edit-product.component";

import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    MainComponent,
    ProductsListComponent,
    AddProductComponent,
    AddProductDialog,
    EditProductComponent,
    EditProductDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
