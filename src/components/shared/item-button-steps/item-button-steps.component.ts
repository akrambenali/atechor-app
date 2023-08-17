import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';

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

  @Input()
  solution!: Solutions;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRoute(route:string): void {
    this.router.navigateByUrl( route, { state: this.solution } );

}

}
