import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { PhonePipe } from './pipes/phone.pipe';
import { DescriptionShortenerPipe } from './pipes/description-shortener.pipe';
import { ButtonEffectsDirective } from './directives/button-effects.directive';


@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    PhonePipe,
    DescriptionShortenerPipe,
    ButtonEffectsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
