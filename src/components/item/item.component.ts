import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FonctionItem, SecteurItem } from 'src/business/model/solution.model';

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

  @Output() sendSecteurEvent = new EventEmitter<any>();
  @Output() sendFonctionEvent = new EventEmitter<any>();
  

  status: boolean = false;
  item: SecteurItem = {
    title: '',
    value: false
  };
  fonction: FonctionItem = {
    title: '',
    value: false
  };

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
      this.status = !this.status;
      this.item.title = this.title;
      this.item.value = true;
      this.fonction.title = this.title;
      this.fonction.value = true;
      this.sendSecteurEvent.emit(this.item);
      this.sendFonctionEvent.emit(this.fonction);
  }
}
