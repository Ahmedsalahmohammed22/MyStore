import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  //Injecting the CartsService
  constructor(private cart :CartsService) {}
  Cart:any=[];
  name = this.cart.getName;
  total:any =this.cart.getCartTotal();


  ngOnInit(): void {
  }
  // when click button then clear localstorage
  // will empty cart
  clearCart(){
    this.cart.clearCart();
    this.cart.cartProducts = this.Cart;
  };

}
