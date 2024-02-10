import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Implemntation, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-deadline-page',
  templateUrl: './client-deadline-page.component.html',
  styleUrls: ['./client-deadline-page.component.css'],
})
export class ClientDeadlinePageComponent implements OnInit {
  solutionModel = {} as Solutions;
  deadline = {} as Implemntation;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientDeadline(newItem: any) {
    this.deadline = newItem;
    this.checkDisabledItem(this.deadline);
    this.solutionModel.compatibility.implemntation = this.deadline;
    this.isEmpty = false;
    this.goToRoute('erp/reason-client');
  }

  checkDisabledItem(item: Implemntation) {
    const M1 = document.getElementById('M1');
    const M6 = document.getElementById('M6');
    const A1 = document.getElementById('A1');
    const A100 = document.getElementById('A100');
    const any = document.getElementById('any');
    if (item.M1 === true) {
      if (M6 != null && A1 != null && A100 != null && any != null) {
        M6.classList.add('disabled');
        A1.classList.add('disabled');
        A100.classList.add('disabled');
        any.classList.add('disabled');
      }
    } else if (item.M6 === true) {
      if (M1 != null && A1 != null && A100 != null && any != null) {
        M1.classList.add('disabled');
        A1.classList.add('disabled');
        A100.classList.add('disabled');
        any.classList.add('disabled');
      }
    } else if (item.A1 === true) {
      if (M1 != null && M6 != null && A100 != null && any != null) {
        M1.classList.add('disabled');
        M6.classList.add('disabled');
        A100.classList.add('disabled');
        any.classList.add('disabled');
      }
    } else if (item.A100 === true) {
      if (M1 != null && M6 != null && A1 != null && any != null) {
        M1.classList.add('disabled');
        M6.classList.add('disabled');
        A1.classList.add('disabled');
        any.classList.add('disabled');
      }
    } else if (item.any === true) {
      if (M1 != null && M6 != null && A1 != null && A100 != null) {
        M1.classList.add('disabled');
        M6.classList.add('disabled');
        A1.classList.add('disabled');
        A100.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const M1 = document.getElementById('M1');
    const M6 = document.getElementById('M6');
    const A1 = document.getElementById('A1');
    const A100 = document.getElementById('A100');
    const any = document.getElementById('any');
    if (!status) {
      if (M1 != null && M6 != null && A1 != null && A100 != null && any != null) {
        M1.classList.remove('disabled');
        M6.classList.remove('disabled');
        A1.classList.remove('disabled');
        A100.classList.remove('disabled');
        any.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
