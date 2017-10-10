import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products;
  constructor(private services: ProductService) {
    services.all().subscribe(products => {
      this.products = products;
    });
  }

  ngOnInit() {
  }

}
