import { Component, Input, OnInit } from '@angular/core';

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

  value: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onIncrement(): void {
    this.value += 1;
  }

  onDecrement(): void {
    this.value -= 1;
    if(this.value <= 0)  {
      this.value = 0;
    }
  }
}
