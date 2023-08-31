import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';
import { ClientService } from '../services/client.services';
import { Cabinet } from 'src/business/model/cabinet.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-cabinet-page',
  templateUrl: './client-cabinet-page.component.html',
  styleUrls: ['./client-cabinet-page.component.css'],
})
export class ClientCabinetPageComponent implements OnInit {
  RespMessage: any;
  cabinetData!: Cabinet;
  solutionModel = {} as Solutions;

  constructor(private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) {}

  cabinetContactForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    country: new FormControl(),
    office: new FormControl(),
    endClient: new FormControl(),
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
    console.log(this.cabinetContactForm.value);
    this.cabinetData = this.cabinetContactForm.value as Cabinet;
    this.clientService.addCabinet(this.cabinetData).subscribe((res: any) => {
      this.RespMessage = res;
      console.log('====================================');
      console.log(this.RespMessage);
      console.log('====================================');
    });
  }
}
