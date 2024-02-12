import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClientCrmService } from '../services/client-crm.services';
import { Client } from 'src/business/model/client.model';
import { Solutions } from 'src/business/model/solution.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-data-crm-page',
  templateUrl: './client-data-crm-page.component.html',
  styleUrls: ['./client-data-crm-page.component.css'],
})
export class ClientDataPageCrmComponent implements OnInit {
  RespMessage: any;
  clientData!: Client;
  contactforms = true;
  solutionModel = {} as Solutions;
  submitted = false;

  constructor(
    private clientService: ClientCrmService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public responsive: ResponsiveService,
  ) {}
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    acceptTerms: new FormControl(false, Validators.requiredTrue),
    contactOk: new FormControl(true),
    type: new FormControl('CRM'),
  });

  ngOnInit(): void {
    this.solutionModel = history.state;
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.clientData = this.contactForm.value as Client;
    this.clientService.addClient(this.clientData).subscribe((res: any) => {
      this.RespMessage = res;
    });

    this.clientService.getSolutions(this.solutionModel).subscribe((res) => {
      if (res) {
        this.router.navigate(['crm/mail-client'], {
          queryParams: { email: this.clientData.email },
        });
      }
    });
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
