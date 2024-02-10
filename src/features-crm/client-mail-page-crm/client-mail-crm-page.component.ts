import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-mail-crm-page',
  templateUrl: './client-mail-crm-page.component.html',
  styleUrls: ['./client-mail-crm-page.component.css'],
})
export class ClientMailPageCrmComponent implements OnInit {
  email!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }
}
