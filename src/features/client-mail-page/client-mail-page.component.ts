import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-mail-page',
  templateUrl: './client-mail-page.component.html',
  styleUrls: ['./client-mail-page.component.css'],
})
export class ClientMailPageComponent implements OnInit {
  email!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      console.log(this.email);
    });
  }
}
