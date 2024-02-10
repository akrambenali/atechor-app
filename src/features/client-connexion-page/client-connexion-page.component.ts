import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-connexion-page',
  templateUrl: './client-connexion-page.component.html',
  styleUrls: ['./client-connexion-page.component.css'],
})
export class ClientConnexionPageComponent implements OnInit {
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

  pushClientConnexion(newItem: any) {
    this.solutionModel.connexion = newItem;
    this.checkDisabledItem(newItem);
    this.isEmpty = false;
    this.goToRoute('erp/deadline-client');
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
