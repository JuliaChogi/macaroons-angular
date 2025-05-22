import {Component, Input} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage-card',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {

  @Input() advantage: AdvantageType = {} as AdvantageType;
  @Input() index:number = 0;

}
