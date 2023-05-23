import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
