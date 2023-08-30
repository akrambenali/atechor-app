import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coefficients, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-coefficients-page',
  templateUrl: './client-coefficients-page.component.html',
  styleUrls: ['./client-coefficients-page.component.css']
})
export class ClientCoefficientsPageComponent implements OnInit {


  solutionModel = {} as Solutions;
  coefficients = {} as Coefficients;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history.state),
      console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientDev(newItem: any) {
   /*  this.dev = newItem;
    this.solutionModel.dev = this.dev; */
    console.log(this.solutionModel);
  }

}
