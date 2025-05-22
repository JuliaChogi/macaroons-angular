import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() product: ProductType = {} as ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cartService: CartService) {
  }

  addProductToCart(): void {
    this.cartService.count++;
    this.cartService.sum += this.product.price;
    this.addToCartEvent.emit(this.product.title);
  }
}
