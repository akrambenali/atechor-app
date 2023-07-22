import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ClientService } from '../services/client.services';
import { Client } from 'src/business/model/client.model';

@Component({
  selector: 'app-client-data-page',
  templateUrl: './client-data-page.component.html',
  styleUrls: ['./client-data-page.component.css'],
})
export class ClientDataPageComponent implements OnInit {
  RespMessage: any;
  clientData!: Client;

  constructor(private clientService: ClientService ) {}
  contactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    company: new FormControl(),
    country: new FormControl(),
    role: new FormControl(),
    email: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm.value);
    this.clientData = this.contactForm.value as Client ;
    this.clientService.addClient(this.clientData).subscribe((res: any) => {
      this.RespMessage = res;
      console.log('====================================');
      console.log(this.RespMessage);
      console.log('====================================');
    });
  }
}
