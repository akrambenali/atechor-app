import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternationnalBusiness, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-deployment-page',
  templateUrl: './client-deployment-page.component.html',
  styleUrls: ['./client-deployment-page.component.css']
})
export class ClientDeploymentPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  internationnalBusiness = {} as InternationnalBusiness;
  isEmpty: boolean = true;
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history. state;
     
  }

  pushClientinternationnalBusiness(newItem: any) {
    this.internationnalBusiness = newItem;
    this.solutionModel.internationnalBusiness = this.internationnalBusiness;
    this.isEmpty =  false;
    console.log( this.solutionModel);
    
  }

}
