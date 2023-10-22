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
  @Input()
  hostingType!: string;
  @Input()
  reasonType!: string;
  @Input()
  code!: string;
  @Input()
  codeSecteur!: string;

  @Output() sendSecteurEvent = new EventEmitter<any>();
  @Output() sendFonctionEvent = new EventEmitter<any>();
  @Output() sendHostingEvent = new EventEmitter<any>();
  @Output() sendReasonEvent = new EventEmitter<any>();

  status: boolean = false;
  item: SecteurItem = {
    title: '',
    value: false,
    codeSecteur: '',
  };
  fonction: FonctionItem = {
    code: '',
    title: '',
    value: false,
  };

  itemHosting = {};

  itemReason = {};

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.status = !this.status;
    this.item.title = this.title;
    this.item.value = true;
    this.item.codeSecteur = this.codeSecteur;
    this.fonction.code = this.code;
    this.fonction.title = this.title;
    this.fonction.value = true;
    switch (this.hostingType) {
      case (this.hostingType = 'A'):
        this.itemHosting = { cloud: true, value: this.hostingType };
        break;
      case (this.hostingType = 'B'):
        this.itemHosting = { onPremise: true, value: this.hostingType };
        break;
      case (this.hostingType = 'C'):
        this.itemHosting = { hybrid: true, value: this.hostingType };
        break;
      case (this.hostingType = 'D'):
        this.itemHosting = { saas: true, value: this.hostingType };
        break;
      case (this.hostingType = 'E'):
        this.itemHosting = { any: true, value: this.hostingType };
        break;
      default:
        break;
    }
    switch (this.reasonType) {
      case (this.reasonType = 'SAO'):
        this.itemReason = { sao: true, value: this.reasonType };
        break;
      case (this.reasonType = 'MF'):
        this.itemReason = { mf: true, value: this.reasonType };
        break;
      case (this.reasonType = 'PI'):
        this.itemReason = { pi: true, value: this.reasonType };
        break;
      case (this.reasonType = 'IN'):
        this.itemReason = { in: true, value: this.reasonType };
        break;
      case (this.reasonType = 'VT'):
        this.itemReason = { vt: true, value: this.reasonType };
        break;
      case (this.reasonType = 'ANY'):
        this.itemReason = { other: true, value: this.reasonType };
        break;
      default:
        break;
    }
    this.sendSecteurEvent.emit(this.item);
    this.sendFonctionEvent.emit(this.fonction);
    this.sendHostingEvent.emit(this.itemHosting);
    this.sendReasonEvent.emit(this.itemReason);
  }
}
