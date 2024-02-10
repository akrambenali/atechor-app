import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dev, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-dev-crm-page',
  templateUrl: './client-dev-crm-page.component.html',
  styleUrls: ['./client-dev-crm-page.component.css'],
})
export class ClientDevPageCrmComponent implements OnInit {
  solutionModel = {} as Solutions;
  dev = {} as Dev;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientDev(newItem: any) {
    this.dev = newItem;
    this.checkDisabledItem(this.dev);
    this.solutionModel.dev = this.dev;
    this.isEmpty = false;
    this.goToRoute('crm/connexion-client');
  }

  checkDisabledItem(item: Dev) {
    const L = document.getElementById('L');
    const H = document.getElementById('H');
    const N = document.getElementById('N');
    if (item.low === true) {
      if (H != null && N != null) {
        H.classList.add('disabled');
        N.classList.add('disabled');
      }
    } else if (item.high === true) {
      if (L != null && N != null) {
        L.classList.add('disabled');
        N.classList.add('disabled');
      }
    } else if (item.none === true) {
      if (L != null && H != null) {
        L.classList.add('disabled');
        H.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const L = document.getElementById('L');
    const H = document.getElementById('H');
    const N = document.getElementById('N');

    if (!status) {
      if (L != null && H != null && N != null) {
        L.classList.remove('disabled');
        H.classList.remove('disabled');
        N.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
