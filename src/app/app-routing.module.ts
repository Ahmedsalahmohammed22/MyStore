import { ProductListComponent } from './products/component/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/component/cart/cart.component';
import { ProductItemDetailComponent } from './products/component/product-item-detail/product-item-detail.component';
import { DetailsComponent } from './products/component/details/details.component';
import { ConfirmationComponent } from './carts/component/confirmation/confirmation.component';

const routes: Routes = [
  {path:'products' , component:ProductListComponent},
  {path:'details/:id' , component:DetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'confirmation' , component:ConfirmationComponent},
  {path:'**' , redirectTo:'products' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
