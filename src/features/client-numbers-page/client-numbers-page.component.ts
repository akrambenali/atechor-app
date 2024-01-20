import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions, UsersNumber } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-numbers-page',
  templateUrl: './client-numbers-page.component.html',
  styleUrls: ['./client-numbers-page.component.css']
})
export class ClientNumbersPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  usersNumber = {} as  UsersNumber;
  isEmpty: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history. state;
     
  }

  pushUsersNumber(newItem: any) {
    this.usersNumber = newItem;
    this.checkDisabledItem(this.usersNumber);
    this.solutionModel.compatibility.usersNumber = this.usersNumber;
    this.isEmpty =  false;
    this.goToRoute('/hosting-client');
    
  }
  checkDisabledItem(item: UsersNumber) {
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

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
