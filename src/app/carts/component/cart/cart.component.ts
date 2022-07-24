import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  FullName:string = '';
  // Create a cartProducts of type array to store data inside it
  cartProducts:any[]=[];
  total : any = 0;
  //Injecting the CartsService
  constructor(private cartProduct : CartsService , private router : Router) { }

  ngOnInit(): void {
    this.getCart();
    console.log(this.cartProducts)
  }
  // this function to get data from service to store in cartProducts
  getCart(){
    this.cartProducts = this.cartProduct.getCartProducts();
    // update total
    this.total =  this.cartProduct.getCartTotal();
  }
  // this function to detect amount of item
  changeAmount(){
    // update total
    this.total = this.cartProduct.getCartTotal();
    // update cartProducts
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
  }
  // this function to delete product from cartProducts and localstorage
  deleteProduct(index :number){
    this.cartProducts.splice(index , 1);
    // update total
    this.total = this.cartProduct.getCartTotal();
    // update cartProducts
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
  }
  // this function to send name to service
  sendName(){
    this.cartProduct.setName = this.FullName;
    this.router.navigate(["/confirmation"])
  }



}
