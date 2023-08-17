import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientBusiness } from 'src/business/model/solution.model';

@Component({
  selector: 'app-item-button',
  templateUrl: './item-button.component.html',
  styleUrls: ['./item-button.component.css']
})
export class ItemButtonComponent implements OnInit {
 @Input()
  title!: string;
 @Input()
  image!: string;

  @Output() sendClientTypeEvent = new EventEmitter<any>();

  status: boolean = false;

  item = {} as ClientBusiness;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
    this.sendClientTypeEvent.emit(this.item);
  }

}
