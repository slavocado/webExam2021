import {Component, OnInit} from '@angular/core';
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

      let topArr = [];
      let bottomArr = [];

      this.products.forEach(product => {
        if (product.isBought === false) {
          topArr.push(product);
        } else {
          bottomArr.push(product);
        }
      })

      topArr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      });

      bottomArr.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      });

      this.products = topArr.concat(bottomArr);

    } catch (e) {
      console.error(e)
    }
  }

  async onAddProduct(product: Product) {
    let elWithMaxId = this.products.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
    product.id = elWithMaxId.id + 1;
    // this.workers.push(worker);

    try {
      console.log('begin')
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
