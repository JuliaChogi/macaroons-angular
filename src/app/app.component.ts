import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: ProductType[] = [
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

  public advantages: AdvantageType[] = [
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

  public formValues = {
    productTitle: '',
    userName: '',
    phone: '',
  }

  public isOpen: boolean = false;
  public showPresent: boolean = true;
  public phone: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder(): void {
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

  public openMenu(): void {
    this.isOpen = true;
  }

  public closeMenu(target?: HTMLElement): void {
    this.isOpen = false;
  }

  title = 'macaroons';
}
