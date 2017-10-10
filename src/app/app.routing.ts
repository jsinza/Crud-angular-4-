import {Routes} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

export const appRoutes: Routes = [
    {path: 'products', component: ProductsListComponent},
    {path: 'products/create', component: ProductsCreateComponent},
    {path: 'products/:id/edit', component: ProductsEditComponent},
    {path: 'products/:id/detail', component: ProductsDetailComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'} ];
