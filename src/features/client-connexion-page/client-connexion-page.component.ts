import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-client-connexion-page',
  templateUrl: './client-connexion-page.component.html',
  styleUrls: ['./client-connexion-page.component.css']
})
export class ClientConnexionPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  isEmpty: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    (this.solutionModel = history.state),
      console.log('====================================');
    console.log(this.solutionModel);
    console.log('====================================');
  }

  pushClientConnexion(newItem: any) {
    this.solutionModel.connexion = newItem;
    this.isEmpty = false;
    console.log(this.solutionModel);
  }
}

