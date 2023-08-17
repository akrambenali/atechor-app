import { Component, OnInit } from '@angular/core';
import {
  Compatibility,
  SecteurItem,
  Solutions,
} from 'src/business/model/solution.model';

@Component({
  selector: 'app-secteur-page',
  templateUrl: './secteur-page.component.html',
  styleUrls: ['./secteur-page.component.css'],
})
export class SecteurPageComponent implements OnInit {
  solutionModel = {} as Solutions;
  compatibility = {} as Compatibility;
  secteur: SecteurItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  pushSecteur(newItem: any) {
    const found = this.secteur.some((el) => el.title === newItem.title);
    if (!found) {
      this.secteur.push(newItem);
    } else {
      this.secteur = this.removeObjectWithId(this.secteur, newItem.title);
    }
    this.compatibility.secteur =  this.secteur;
    this.solutionModel.compatibility = this.compatibility;
    console.log( this.solutionModel);
    
  }

  removeObjectWithId(arr: SecteurItem[], title: string) {
    const objWithIdIndex = arr.findIndex((obj) => obj.title === title);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }
}
