import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Product } from '../../models/shop/product';
import { mockProducts } from './mock/mockProducts';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private cartItemsNbr = 0;
  private cartItems: Subject<number> = new Subject<number>();

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(mockProducts);
  }

  getCartItems(): Observable<number> {
    return this.cartItems.asObservable();
  }

  addCartItem(): void {
    this.cartItemsNbr++;
    this.cartItems.next(this.cartItemsNbr);
  }
}