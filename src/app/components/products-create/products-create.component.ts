import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  public  product= {
    name: '', price : '', description : '', picture: ''
  };
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
  }

  createProduct(obj) {
    this.service.create(obj.product, obj.file).subscribe(res => {
      this.router.navigate(['/products']);
    });
  }

}


