import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-reason-page',
  templateUrl: './client-reason-page.component.html',
  styleUrls: ['./client-reason-page.component.css'],
})
export class ClientReasonPageComponent implements OnInit {
  solutionModel = {} as Solutions;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history.state),
      console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }
}
