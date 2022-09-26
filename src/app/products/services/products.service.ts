import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { items } from 'src/app/carts/models/item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //create path local file json
  product: any = "/assets/data.json";
  //injecting HttpCLient
  constructor(private http: HttpClient) { }
  getProductList(): Observable<any> {
    //get data from local file json
    return this.http.get<items[]>(this.product);
  }
  // get product details by id from file json
  getProductById(id: number): Observable<any> {
    return this.http.get<items[]>(this.product).pipe(map(res => {
      return res.find((item: any) => item.id == id)
    }))
  }

}
