import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-connexion-page',
  templateUrl: './client-data-select-page.component.html',
  styleUrls: ['./client-data-select-page.component.css'],
})
export class ClientDataSelectPageComponent implements OnInit {
  solutionModel = {} as Solutions;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }

}
