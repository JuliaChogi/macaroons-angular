import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  sum: number = 0;

  constructor() {
  }
}
