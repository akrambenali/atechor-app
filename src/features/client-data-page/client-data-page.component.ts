import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClientService } from '../services/client.services';
import { Client } from 'src/business/model/client.model';
import { Solutions } from 'src/business/model/solution.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-data-page',
  templateUrl: './client-data-page.component.html',
  styleUrls: ['./client-data-page.component.css'],
})
export class ClientDataPageComponent implements OnInit {
  RespMessage: any;
  clientData!: Client;
  solutionModel = {} as Solutions;
  

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    company: new FormControl(),
    country: new FormControl(),
    role: new FormControl(),
    email: new FormControl(),
  });

  ngOnInit(): void {
    (this.solutionModel = history.state),
    console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.clientData = this.contactForm.value as Client;
    this.clientService.addClient(this.clientData).subscribe((res: any) => {
      this.RespMessage = res;
      console.log('====================================');
      console.log(this.RespMessage);
      console.log('====================================');
    });

    this.clientService.getSolutions(this.solutionModel).subscribe((res)=> {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    })
  }
}
