import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './../shared/component/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './component/details/details.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  exports:[
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    DetailsComponent
  ]
})
export class ProductsModule { }
