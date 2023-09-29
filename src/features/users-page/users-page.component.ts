import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySize, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  companySize = {} as CompanySize;
  isEmpty: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientCompanySize(newItem: any) {
    this.companySize = newItem;
    this.solutionModel.compatibility.companySize = this.companySize;
    this.isEmpty = false;
  }
}
