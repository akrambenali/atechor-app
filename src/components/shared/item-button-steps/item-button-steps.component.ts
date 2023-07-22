import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-button-steps',
  templateUrl: './item-button-steps.component.html',
  styleUrls: ['./item-button-steps.component.css']
})
export class ItemButtonStepsComponent implements OnInit {
  @Input()
  next!: string ;

  @Input()
  previous!: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
