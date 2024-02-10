import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coefficients, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-coefficients-crm-page',
  templateUrl: './client-coefficients-crm-page.component.html',
  styleUrls: ['./client-coefficients-crm-page.component.css'],
})
export class ClientCoefficientsPageCrmComponent implements OnInit {
  solutionModel = {} as Solutions;
  coefficients = {
    software: 1,
    price: 1,
    vendor: 1,
    Compatibility: 1,
    position: 1,
  } as Coefficients;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
    this.solutionModel.compatibility.coefficients = this.coefficients;
  }

  pushClientCoefficients(newItem: any) {
    switch (newItem.type) {
      case (newItem.type = 'software'):
        this.coefficients.software = newItem.value;
        break;
      case (newItem.type = 'price'):
        this.coefficients.price = newItem.value;
        break;
      case (newItem.type = 'vendor'):
        this.coefficients.vendor = newItem.value;
        break;
      case (newItem.type = 'Compatibility'):
        this.coefficients.Compatibility = newItem.value;
        break;
      case (newItem.type = 'position'):
        this.coefficients.position = newItem.value;
        break;
      default:
        break;
    }

    this.solutionModel.compatibility.coefficients = this.coefficients;
  }
}
