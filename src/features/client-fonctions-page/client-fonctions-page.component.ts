import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FonctionItem, Solutions } from 'src/business/model/solution.model';
import { ResponsiveService } from '../services/responsive/responsive.service';

@Component({
  selector: 'app-client-fonstions-page',
  templateUrl: './client-fonctions-page.component.html',
  styleUrls: ['./client-fonctions-page.component.css']
})
export class ClientFonctionsPageComponent implements OnInit {

  solutionModel = {} as Solutions;
  fonctions: FonctionItem[] = [];
  isEmpty: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history. state;
     
  }

  pushFonction(newItem: any) {
    const found = this.fonctions.some((el) => el.title === newItem.title);
    if (!found) {
      this.fonctions.push(newItem);
    } else {
      this.fonctions = this.removeObjectWithId(this.fonctions, newItem.title);
    }
    this.solutionModel.compatibility.fonctions = this.fonctions;
    this.isEmpty =  false;
    
  }

  removeObjectWithId(arr: FonctionItem[], title: string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.title === title);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    if(arr.length === 0) {
      this.isEmpty =  true;
    }
    return arr;
  }



}
