import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  // Create a cartProducts of type array to store data inside it
  cartProducts:any=[];
  // Create a total of type number to store Multiplying price of item and quatity of item inside it
  total:number = 0;
  name : string = '';
  constructor( ) { }
// get data from localstorage and store data in cartProducts and return this data
  getCartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    return this.cartProducts;
  }
  //this function to remove data from localstorage
  clearCart(){
    if("cart" in localStorage){
      localStorage.removeItem("cart");
    }
  }
  // get price of item and get quatity of item then Multiplying them and store them in total
  // then return total
  getCartTotal(){
    this.total=0;
    for(let x=0 ; x < this.cartProducts.length ; x++){
      this.total+=this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
    return this.total;
  }
                         /***************************************************** */
  // get data from component cart and store data in varibale of name
  set setName(data:string){
    this.name = data;
  };
  // return this variabe of name
  get getName(){
    return this.name;
  }

}
