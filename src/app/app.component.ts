import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  protected products: ProductType[] = [];

  constructor(private productService: ProductService, public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];
  protected formValues = {
    productTitle: '',
    userName: '',
    phone: '',
  }

  protected isOpen: boolean = false;
  protected showPresent: boolean = true;
  protected phone: string = '375293689868';
  protected instagramLink: string = 'https://www.instagram.com';

  protected scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  protected addToCart(product: string): void {
    alert(product + ' добавлен в корзину!')
  }

  createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун!');
      return
    }
    if (!this.formValues.userName) {
      alert('Заполните имя!')
      return
    }
    if (!this.formValues.phone) {
      alert('Укажите номер телефона!');
      return
    }
    alert('Спасибо за заказ!');
    this.formValues = {
      productTitle: '',
      userName: '',
      phone: '',
    }
  }

  openMenu(): void {
    this.isOpen = true;
  }

  closeMenu(target?: HTMLElement): void {
    this.isOpen = false;
  }

  title = 'macaroons';
}
