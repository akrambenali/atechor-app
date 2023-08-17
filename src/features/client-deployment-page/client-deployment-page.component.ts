import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternationnalBusiness, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-deployment-page',
  templateUrl: './client-deployment-page.component.html',
  styleUrls: ['./client-deployment-page.component.css']
})
export class ClientDeploymentPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  internationnalBusiness = {} as InternationnalBusiness

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history.state,
    console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientinternationnalBusiness(newItem: any) {
    this.internationnalBusiness = newItem;
    this.solutionModel.internationnalBusiness = this.internationnalBusiness;
    console.log( this.solutionModel);
    
  }

}
