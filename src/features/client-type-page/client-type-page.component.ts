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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientType(newItem: any) {
    this.clientBusiness = newItem;
    this.checkDisabledItem(this.clientBusiness);
    this.solutionModel.clientBusiness = this.clientBusiness;
    this.isEmpty = false;
    this.goToRoute('erp/revenue-client');
  }

  checkDisabledItem(item: ClientBusiness) {
    const b2b = document.getElementById('b2b');
    const b2c = document.getElementById('b2c');
    const both = document.getElementById('both');
    if (item.b2b === true) {
      if (b2c != null && both != null) {
        b2c.classList.add('disabled');
        both.classList.add('disabled');
      }
    } else if (item.b2c === true) {
      if (b2b != null && both != null) {
        b2b.classList.add('disabled');
        both.classList.add('disabled');
      }
    } else if (item.both === true) {
      if (b2b != null && b2c != null) {
        b2b.classList.add('disabled');
        b2c.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const b2b = document.getElementById('b2b');
    const b2c = document.getElementById('b2c');
    const both = document.getElementById('both');
    if (!status) {
      if (b2b != null && b2c != null && both != null) {
        b2b.classList.remove('disabled');
        b2c.classList.remove('disabled');
        both.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
