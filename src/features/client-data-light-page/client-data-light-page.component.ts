import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    public responsive: ResponsiveService,
  ) {}
  contactFormLight = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

    contactOk: new FormControl(),
  });

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  get f() {
    return this.contactFormLight.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactFormLight.invalid) {
      return;
    }
    this.clientData = this.contactFormLight.value as Client;
    this.clientData.contactOk = false;

    this.clientService.addClient(this.clientData).subscribe((res: any) => {
      this.RespMessage = res;
    });

    this.clientService.getSolutions(this.solutionModel).subscribe((res) => {
      if (res) {
        this.router.navigate(['erp/mail-client'], {
          queryParams: { email: this.clientData.email },
        });
      }
    });
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
