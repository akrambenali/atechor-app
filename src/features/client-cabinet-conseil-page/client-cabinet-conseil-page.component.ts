import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-cabinet-conseil-page',
  templateUrl: './client-cabinet-conseil-page.component.html',
  styleUrls: ['./client-cabinet-conseil-page.component.css'],
})
export class ClientCabinetConseilComponent implements OnInit {
  solutionModel = {} as Solutions;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushCabinetConseil(newItem: any) {
    this.solutionModel.cabinetConseil = newItem;
    this.checkDisabledItem(newItem);
    this.isEmpty = false;
    this.goToRoute('erp/coefficients-client');
  }

  checkDisabledItem(item: boolean) {
    const Y = document.getElementById('Y');
    const N = document.getElementById('N');
    if (item === true) {
      if (N != null) {
        N.classList.add('disabled');
      }
    } else {
      if (Y != null) {
        Y.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const Y = document.getElementById('Y');
    const N = document.getElementById('N');

    if (!status) {
      if (Y != null && N != null) {
        Y.classList.remove('disabled');
        N.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
