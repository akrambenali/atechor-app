import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hosting, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-hosting-page',
  templateUrl: './client-hosting-page.component.html',
  styleUrls: ['./client-hosting-page.component.css'],
})
export class ClientHostingPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  hosting = {} as Hosting;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history. state);
       
  }

  pushClientHosting(newItem: any) {
    this.hosting = newItem;
    this.solutionModel.hosting = this.hosting;
    this.isEmpty = false;
    
  }
}
