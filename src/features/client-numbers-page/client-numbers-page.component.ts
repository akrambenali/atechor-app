import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions, UsersNumber } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-numbers-page',
  templateUrl: './client-numbers-page.component.html',
  styleUrls: ['./client-numbers-page.component.css']
})
export class ClientNumbersPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  usersNumber = {} as  UsersNumber;
  isEmpty: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history. state;
     
  }

  pushUsersNumber(newItem: any) {
    this.usersNumber = newItem;
    this.solutionModel.compatibility.usersNumber = this.usersNumber;
    this.isEmpty =  false;
    console.log( this.solutionModel);
    
  }
}
