import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../services/client.services';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  id: any;
  Scores: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getScores(this.id);
  }

  getScores(id : string) {
    this.clientService.getScores(id).subscribe( res => {
      this.Scores= res;
     });
  }

}
