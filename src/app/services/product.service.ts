import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  constructor() {
  }

  getProducts(): ProductType[] {
    //some ajax
    return [
      {
        img: 'card1.png',
        title: 'Макарун с малиной',
        price: 1.70
      },
      {
        img: 'card2.png',
        title: 'Макарун с манго',
        price: 1.70
      },
      {
        img: 'card3.png',
        title: 'Пирог с ванилью',
        price: 1.70
      },
      {
        img: 'card4.png',
        title: 'Пирог с фисташками',
        price: 1.70
      }
    ];
  }
}
