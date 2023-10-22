import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-reason-page',
  templateUrl: './client-reason-page.component.html',
  styleUrls: ['./client-reason-page.component.css'],
})
export class ClientReasonPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  reason: any = [];
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {}

  ngOnInit(): void {
    (this.solutionModel = history. state);
       
  }

  pushReasonDev(newItem: any) {
  
    const found = this.reason.some(
      (el: { value: any }) => el.value === newItem.value
    );
    if (!found) {
      this.reason.push(newItem);
    } else {
      this.reason = this.removeObjectWithId(this.reason, newItem.value);
    }
    if (this.reason.length > 0) {
      this.isEmpty = false;
    }
    
    this.solutionModel.compatibility.reason  = this.reason;
    
  }

  removeObjectWithId(arr: any[], value: string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.value === value);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    if (arr.length === 0) {
      this.isEmpty = true;
    }
    return arr;
  }
}
