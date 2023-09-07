import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Size, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-revenues-page',
  templateUrl: './client-revenues-page.component.html',
  styleUrls: ['./client-revenues-page.component.css']
})
export class ClientRevenuesPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  companySize = {}  as Size;
  isEmpty: boolean = true;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history.state,
    console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientRevenues(newItem: any) {
    this.companySize = newItem;
    this.solutionModel.compatibility.size = this.companySize;
    this.isEmpty =  false;
    console.log( this.solutionModel);
    
  }

}
