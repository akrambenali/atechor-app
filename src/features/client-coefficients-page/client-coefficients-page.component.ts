import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coefficients, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-coefficients-page',
  templateUrl: './client-coefficients-page.component.html',
  styleUrls: ['./client-coefficients-page.component.css'],
})
export class ClientCoefficientsPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  coefficients = {
    software: 0,
    price: 0,
    vendor: 0,
    Compatibility: 0,
    postion: 0,
  } as Coefficients;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history.state),
    console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientCoefficients(newItem: any) {
    console.log(newItem);
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
        this.coefficients.postion = newItem.value;
        break;
      default:
        break;
    }

    this.solutionModel.compatibility.coefficients = this.coefficients;
    this.isEmpty = false;
    console.log(this.solutionModel);
  }
}
