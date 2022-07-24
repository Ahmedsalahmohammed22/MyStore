import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { items } from 'src/app/carts/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // send product from parent (productList) to child (productItem)
  @Input() product:items;
    // send item from child (productItem) to  parent (productList)
  @Output() item:EventEmitter<any>= new EventEmitter();
  amount:number= 1;
  constructor() {this.product={
    id : 0,
    name : '',
    price : 0,
    url : '',
    description : ''
  } }

  ngOnInit(): void {
  }
  // item will do emit and store product and amount in item
  add(){
    this.item.emit({item:this.product , quantity:this.amount});

  }

}
