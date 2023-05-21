import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'secteur-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input()
  title!: string;
 @Input()
  image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
