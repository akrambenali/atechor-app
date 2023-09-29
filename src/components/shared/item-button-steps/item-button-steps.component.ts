import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { NavigationService } from 'src/features/services/navigation.services';

@Component({
  selector: 'app-item-button-steps',
  templateUrl: './item-button-steps.component.html',
  styleUrls: ['./item-button-steps.component.css'],
})
export class ItemButtonStepsComponent implements OnInit {
  @Input()
  next!: string;
  
  @Input()
  solution!: Solutions;

  @Input()
  isEmpty!: Boolean;

  constructor(private router: Router, private navigation: NavigationService) {}

  ngOnInit(): void {}

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solution });
  }
  back(): void {
    this.navigation.back();
  }
}
