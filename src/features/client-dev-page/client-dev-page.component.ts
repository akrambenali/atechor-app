import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dev, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-dev-page',
  templateUrl: './client-dev-page.component.html',
  styleUrls: ['./client-dev-page.component.css']
})
export class ClientDevPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  dev = {} as Dev;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history. state);
       
  }

  pushClientDev(newItem: any) {
    this.dev = newItem;
    this.solutionModel.dev = this.dev;
    this.isEmpty = false;
    
  }

}
