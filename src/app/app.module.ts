import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductService } from './services/product.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {appRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    ProductsDetailComponent,
    ProductsFormComponent,
    ProductsListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
