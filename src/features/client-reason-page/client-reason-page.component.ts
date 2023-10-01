import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reason, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-reason-page',
  templateUrl: './client-reason-page.component.html',
  styleUrls: ['./client-reason-page.component.css'],
})
export class ClientReasonPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  reason = {} as Reason;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {}

  ngOnInit(): void {
    (this.solutionModel = history. state);
       
  }

  pushReasonDev(newItem: any) {
    this.reason = newItem;
    this.solutionModel.compatibility.reason = this.reason;
    this.isEmpty = false;
    
  }
}
