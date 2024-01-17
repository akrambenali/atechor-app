import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ClientService } from '../services/client.services';
import { Client } from 'src/business/model/client.model';
import { Solutions } from 'src/business/model/solution.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-data-light-page',
  templateUrl: './client-data-light-page.component.html',
  styleUrls: ['./client-data-light-page.component.css'],
})
export class ClientDataPageLightComponent implements OnInit {
  RespMessage: any;
  clientData!: Client;
  contactforms = false;
  solutionModel = {} as Solutions;
  submitted = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService
  ) {}
  contactFormLight = new FormGroup({
    email: new FormControl(),
    contactOk: new FormControl(),
  });

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  onSubmit() {
    this.submitted = true;
    this.clientData = this.contactFormLight.value as Client;
    this.clientData.contactOk = false;

    this.clientService.addClient(this.clientData).subscribe((res: any) => {
      this.RespMessage = res;
    });

    this.clientService.getSolutions(this.solutionModel).subscribe((res) => {
      if (res) {
        this.router.navigate(['/mail-client'], {
          queryParams: { email: this.clientData.email },
        });
      }
    });
  }
}
