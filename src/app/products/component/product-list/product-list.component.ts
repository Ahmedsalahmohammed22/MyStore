import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Create  products of type array to store products of file json inside it
  products:any[]=[];
  loading : boolean= false;
    // Create  cartProducts of type array to store this data of localstorage in cartProducts
  cartProducts:any[] = []

  constructor( private service : ProductsService) { }
  id :any;

  ngOnInit(): void {
    this.getProducts();
  }
  // function to get products from file json and store these in products
  getProducts(){
    this.loading=true;
    this.service.getProductList().subscribe((res:any)=>{
      this.products = res;
      this.loading = false;

    } , (error:any)=>{
      this.loading = false;
      alert(error.message);
    }
    )
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
