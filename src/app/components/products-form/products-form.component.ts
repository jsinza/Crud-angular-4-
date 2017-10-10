import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<any>();
  @Input() btn = 'crear';
  @Input() product;
  file: File;


  ngOnInit() {
  }

  public submit() {
    this.onSubmit.emit({product: this.product, file: this.file});
  }

  setPicture(file ) {
    this.file = file;
  }

}
