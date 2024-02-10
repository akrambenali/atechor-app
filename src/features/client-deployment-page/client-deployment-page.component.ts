import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternationnalBusiness, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-deployment-page',
  templateUrl: './client-deployment-page.component.html',
  styleUrls: ['./client-deployment-page.component.css'],
})
export class ClientDeploymentPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  internationnalBusiness = {} as InternationnalBusiness;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientinternationnalBusiness(newItem: any) {
    this.internationnalBusiness = newItem;
    this.checkDisabledItem(this.internationnalBusiness);
    this.solutionModel.internationnalBusiness = this.internationnalBusiness;
    this.isEmpty = false;
    this.goToRoute('erp/fonctions-client');
  }

  checkDisabledItem(item: InternationnalBusiness) {
    const N = document.getElementById('N');
    const I = document.getElementById('I');

    if (item.international === true) {
      if (N != null) {
        N.classList.add('disabled');
      }
    } else if (item.national === true) {
      if (I != null) {
        I.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const N = document.getElementById('N');
    const I = document.getElementById('I');
    if (!status) {
      if (N != null && I != null) {
        N.classList.remove('disabled');
        I.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
