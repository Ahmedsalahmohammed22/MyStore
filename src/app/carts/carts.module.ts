import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ConfirmationComponent,
    CartComponent
  ]
})
export class CartsModule { }
