import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Implemntation, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-deadline-page',
  templateUrl: './client-deadline-page.component.html',
  styleUrls: ['./client-deadline-page.component.css']
})
export class ClientDeadlinePageComponent implements OnInit {

  solutionModel = {} as Solutions;
  deadline = {} as Implemntation;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history.state),
      console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientDeadline(newItem: any) {
    this.deadline = newItem;
    this.solutionModel.compatibility.implemntation = this.deadline;
    console.log(this.solutionModel);
  }

}
