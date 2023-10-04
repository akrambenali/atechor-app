import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponsiveService } from 'src/features/services/responsive/responsive.service';

@Component({
  selector: 'app-item-coefficient',
  templateUrl: './item-coefficient.component.html',
  styleUrls: ['./item-coefficient.component.css'],
})

export class ItemCoefficientComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  icon!: string;
  @Input()
  type!: string;

  value: number = 1;
  coefficient = {} as Coefficient;


  @Output() sendcoefficientsEvent = new EventEmitter<any>();

  constructor(public responsive: ResponsiveService) {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.value += 1;
    if(this.value >= 3) {
      this.value= 3;
    }
    this.coefficient.type =  this.type ;
    this.coefficient.value = this.value
    this.sendcoefficientsEvent.emit(this.coefficient);
  }

  onDecrement(): void {
    this.value -= 1;
    if(this.value <= 1)  {
      this.value = 1;
    }
    this.coefficient.type =  this.type ;
    this.coefficient.value = this.value
    this.sendcoefficientsEvent.emit(this.coefficient);
  }


}

export interface Coefficient {
  type:  string;
  value:  number;
  
}
