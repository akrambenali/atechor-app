import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySize, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  companySize = {} as CompanySize;
  isEmpty: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {}

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  pushClientCompanySize(newItem: any) {
    this.companySize = newItem;
    this.checkDisabledItem(this.companySize);
    this.solutionModel.compatibility.companySize = this.companySize;
    this.isEmpty = false;
  }
  
  checkDisabledItem(item: CompanySize) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    const F = document.getElementById('F');
    if (item.A === true) {
      if (B != null && C != null && D != null && E != null && F !=null) {
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
      }
    } else if (item.B === true) {
      if (A != null && C != null && D != null && E != null && F != null ) {
        A.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
      }
    } else if (item.C === true) {
      if (A != null && B != null && D != null && E != null && F != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
      }
    }
    else if(item.D === true ) {
      if (A != null && B != null && C != null && E != null && F != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
      }

    } else  if(item.E === true) {
      if (A != null && B != null && C != null && D != null && F != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        F.classList.add('disabled');
      }
    } else if(item.F === true) {
      if (A != null && B != null && C != null && D != null && E != null ) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    const F = document.getElementById('F');
    if (!status) {
      if (A != null && B != null && C != null && D != null && E != null && F != null) {
        A.classList.remove('disabled');
        B.classList.remove('disabled');
        C.classList.remove('disabled');
        D.classList.remove('disabled');
        E.classList.remove('disabled');
        F.classList.remove('disabled');
      }
    }
  }
}
