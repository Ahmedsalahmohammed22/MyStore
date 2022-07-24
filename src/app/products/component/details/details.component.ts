import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cartProducts:any[] = []
  constructor() { }

  ngOnInit(): void {
  }
   //this function to add product and amount which comes in a paramter event to localstorage
  addToCart(event:any){
      //if cart in localStorage, getitem (cart) to store this in cartProducts
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      // if product which add in localstorage which stored in localstorage, show message This product is already in your cart
      let exit = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exit){
        alert("This product is already in your cart");
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
        alert("Add To Cart!");
      }

    } else{
      this.cartProducts.push(event);
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
      alert("Add To Cart!");
    }

  }

}
