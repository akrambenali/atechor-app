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
  hosting: any = [];
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
    const found = this.hosting.some(
      (el: { value: any }) => el.value === newItem.value
    );
    if (!found) {
      this.hosting.push(newItem);
    } else {
      this.hosting = this.removeObjectWithId(this.hosting, newItem.value);
    }
    if (this.hosting.length > 0) {
      this.isEmpty = false;
    }
    this.solutionModel.hosting = this.hosting;
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
