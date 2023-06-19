import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-coefficient',
  templateUrl: './item-coefficient.component.html',
  styleUrls: ['./item-coefficient.component.css']
})
export class ItemCoefficientComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  icon!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
