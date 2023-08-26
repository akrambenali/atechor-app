import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FonctionItem,
  Hosting,
  SecteurItem,
} from 'src/business/model/solution.model';

@Component({
  selector: 'secteur-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  image!: string;
  @Input()
  hostingType!: string;

  @Output() sendSecteurEvent = new EventEmitter<any>();
  @Output() sendFonctionEvent = new EventEmitter<any>();
  @Output() sendHostingEvent = new EventEmitter<any>();

  status: boolean = false;
  item: SecteurItem = {
    title: '',
    value: false,
  };
  fonction: FonctionItem = {
    title: '',
    value: false,
  };

  itemHosting = {
    cloud: false,
    onPremise: false,
    hybrid: false,
    saas: false,
    any: false,
  } as Hosting;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
    this.item.title = this.title;
    this.item.value = true;
    this.fonction.title = this.title;
    this.fonction.value = true;
    switch (this.hostingType) {
      case (this.hostingType = 'A'):
        this.itemHosting.cloud = true;
        break;
      case (this.hostingType = 'B'):
        this.itemHosting.onPremise = true;
        break;
      case (this.hostingType = 'C'):
        this.itemHosting.hybrid = true;
        break;
      case (this.hostingType = 'D'):
        this.itemHosting.saas = true;
        break;
      case (this.hostingType = 'E'):
        this.itemHosting.any = true;
        break;
      default:
        break;
    }
    this.sendSecteurEvent.emit(this.item);
    this.sendFonctionEvent.emit(this.fonction);
    this.sendHostingEvent.emit(this.itemHosting);
  }
}
