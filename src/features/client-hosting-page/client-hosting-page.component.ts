import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-hosting-page',
  templateUrl: './client-hosting-page.component.html',
  styleUrls: ['./client-hosting-page.component.css'],
})
export class ClientHostingPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  hosting: any ;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientHosting(newItem: any) {
    this.hosting = newItem;
    this.checkDisabledItem(this.hosting)
    this.solutionModel.hosting = this.hosting;
    this.isEmpty = false;
   
  }

 

  checkDisabledItem(item: any) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    if (item.cloud === true) {
      if (B != null && C != null && D != null && E != null) {
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
      }
    } else if (item.onPremise === true) {
      if (A != null && C != null && D != null && E != null ) {
        A.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
      }
    } else if (item.hybrid === true) {
      if (A != null && B != null && D != null && E != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
      }
    }
    else if(item.saas === true ) {
      if (A != null && B != null && C != null && E != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        E.classList.add('disabled');
      }

    } else  if(item.any === true) {
      if (A != null && B != null && C != null && D != null  ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
      }
    } 
  }

  getStatus(status: boolean) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    if (!status) {
      if (A != null && B != null && C != null && D != null && E != null) {
        A.classList.remove('disabled');
        B.classList.remove('disabled');
        C.classList.remove('disabled');
        D.classList.remove('disabled');
        E.classList.remove('disabled');
      }
    }
  }
}
