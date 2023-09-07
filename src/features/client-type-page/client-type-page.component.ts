import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientBusiness, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-type-page',
  templateUrl: './client-type-page.component.html',
  styleUrls: ['./client-type-page.component.css']
})
export class ClientTypePageComponent implements OnInit {
  solutionModel = {} as Solutions;
  clientBusiness = {} as ClientBusiness;
  isEmpty: boolean = true;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.solutionModel = history.state,
    console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientType(newItem: any) {
    this.clientBusiness = newItem;
    this.solutionModel.clientBusiness = this.clientBusiness;
    this.isEmpty =  false;
    console.log( this.solutionModel);
    
  }

/*   removeObjectWithId(arr: SecteurItem[], title: string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.title === title);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  } */

}
