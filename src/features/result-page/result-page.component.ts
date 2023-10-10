import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { CoefficientsViewModel } from 'src/business/model/views.model/coefficients-view.model';
import { ClientService } from '../services/client.services';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  id: any;
  result: any;
  history: any;
  secteur: string[] = [];
  coefficientsViewModel!: CoefficientsViewModel;
  clientType!: string;
  internationnalBusiness!: string;
  connexion!: string;
  cA!: string;
  dev!: string;
  employNumber!: string;

  @ViewChild('content') htmlData!: ElementRef;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getScores(this.id);
  }

  public getScores(id: string) {
    this.clientService.getScores(id).subscribe((res) => {
      this.result = res;
      this.extractHistory(this.result.history);
    });
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('application/pdf:base64');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Atechor.pdf');
    });
  }

  public extractHistory(history: any) {
    if (history && history.length > 0) {
      this.coefficientsViewModel = history[0].compatibility.coefficients;
      for (
        let index = 0;
        index < history[0].compatibility.secteur.length;
        index++
      ) {
        const element = history[0].compatibility.secteur[index].title;
        this.secteur.push(element);
      }
      if (history[0].clientBusiness) {
        if (history[0].clientBusiness.b2b) {
          this.clientType = 'B2B';
        }
        if (history[0].clientBusiness.b2c) {
          this.clientType = 'B2C';
        }
        if (history[0].clientBusiness.both) {
          this.clientType = 'B2C et B2B';
        }
      }

      if (history[0].internationnalBusiness) {
        if (history[0].internationnalBusiness.international) {
          this.internationnalBusiness = 'Internationale';
        }
        if (history[0].internationnalBusiness.national) {
          this.internationnalBusiness = 'Nationale';
        }
      }

      if (history[0].connexion) {
        this.connexion = 'Oui';
      } else {
        this.connexion = 'Non';
      }

      if(history[0].compatibility.companySize) {

        if(history[0].compatibility.companySize.A){
          this.cA= 'Moins de 2 M €'
        }
        if(history[0].compatibility.companySize.B){
          this.cA= '2 à 10 M €'
        }
        if(history[0].compatibility.companySize.C){
          this.cA= '10 à 50 M €'
        }
        if(history[0].compatibility.companySize.D){
          this.cA= '50 à 200 M €'
        }
        if(history[0].compatibility.companySize.E){
          this.cA= '200 M à 1 Mrd €'
        }
        if(history[0].compatibility.companySize.F){
          this.cA= '1 Mrd € et plus'
        }

      }
      if(history[0].dev) {
        if(history[0].dev.high) {
          this.dev = 'Beaucoup'
        }
        if(history[0].dev.low) {
          this.dev = 'Peu'
        }
        if(history[0].dev.none) {
          this.dev = 'Pas du tout'
        }
      }

      if(history[0].compatibility.size){
        if(history[0].compatibility.size.A){
          this.employNumber= '1 à 25'
        }
        if(history[0].compatibility.size.B){
          this.employNumber= '25 à 75'
        }
        if(history[0].compatibility.size.C){
          this.employNumber= '75 à 200'
        }
        if(history[0].compatibility.size.D){
          this.employNumber= '200 à 700'
        }
        if(history[0].compatibility.size.E){
          this.employNumber= '700 à 2000'
        }
        if(history[0].compatibility.size.F){
          this.employNumber= 'Plus de 2000'
        }
      }
    }
  }
}
