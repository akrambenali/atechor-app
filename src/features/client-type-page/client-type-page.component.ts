import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientBusiness, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-type-page',
  templateUrl: './client-type-page.component.html',
  styleUrls: ['./client-type-page.component.css'],
})
export class ClientTypePageComponent implements OnInit {
  solutionModel = {} as Solutions;
  clientBusiness = {} as ClientBusiness;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientType(newItem: any) {
    this.clientBusiness = newItem;
    this.solutionModel.clientBusiness = this.clientBusiness;
    this.isEmpty = false;
  }
}
