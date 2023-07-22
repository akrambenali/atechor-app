import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-data-page',
  templateUrl: './client-data-page.component.html',
  styleUrls: ['./client-data-page.component.css'],
})
export class ClientDataPageComponent implements OnInit {
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
  }
}
