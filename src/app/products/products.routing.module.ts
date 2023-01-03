import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component'; 

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product/:category', component: ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
