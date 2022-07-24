import { ProductsService } from './../../services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id:any;
  data:any={};
  amount : number = 1
  // send items from child (productItemDetails) to  parent (productItem) by EventEmitter
  @Output() items:EventEmitter<any>= new EventEmitter();
                        /****************************** */
  //Injecting the ActivatedRoute and the ProductsService
  constructor(private route : ActivatedRoute , private service : ProductsService ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getProduct();
   }

  ngOnInit(): void {
    this.getProduct();
  }
  //function get product by id and store this in object of data
  getProduct(){
    this.service.getProductById(this.id).subscribe((res:any)=>{
      this.data=res;
    })
  }
  //to emit an items up to its parent
  // function items will do emit and store data and amount in item
  addCart(){
    this.items.emit({item:this.data , quantity:this.amount});
  }


 }
