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
  fonctions: FonctionItem[] = [{
    "code": "CRM",
    "title": "CRM",
    "value": false
  },
  {
    "code": "finance",
    "title": "Finance",
    "value": false
  },
  {
    "code": "RH",
    "title": "RH",
    "value": false
  },
  {
    "code": "projets",
    "title": "Gestion de projet",
    "value": false
  },
  {
    "code": "production",
    "title": "Production",
    "value": false
  },
  {
    "code": "achats",
    "title": "Achats",
    "value": false
  },
  {
    "code": "logistique",
    "title": "Logistique",
    "value": false
  },
  {
    "code": "actifs",
    "title": "Gestion des actifs",
    "value": false
  },
  {
    "code": "rnd",
    "title": "R&D",
    "value": false
  }];
  isEmpty: boolean = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public responsive: ResponsiveService) {
    
  }

  ngOnInit(): void {

    this.solutionModel = history. state;
     
  }

  pushFonction(newItem: any) {
    const found = this.fonctions.find((el) => el.title === newItem.title && el.value === true);
    if (!found) {
      for (let index = 0; index < this.fonctions.length; index++) {
        const element = this.fonctions[index];
        if(element.code === newItem.code) {
          element.value = true;
        }
       }
    } else {
      this.fonctions = this.removeObjectWithId(this.fonctions, newItem.title);
    }
    this.solutionModel.compatibility.fonctions = this.fonctions;
    this.isEmpty =  false;
    
  }

  removeObjectWithId(arr: FonctionItem[], title: string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.title === title);

    if (objWithIdIndex > -1) {
      arr[objWithIdIndex].value = false;
    }
    if(arr.length === 0) {
      this.isEmpty =  true;
    }
    return arr;
  }



}
