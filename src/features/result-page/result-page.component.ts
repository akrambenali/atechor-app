import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { CoefficientsViewModel } from 'src/business/model/views.model/coefficients-view.model';
import { ClientService } from '../services/client.services';
import { ReasonEnum } from 'src/business/model/views.model/reasonEnum';
import { implemntationEnum } from 'src/business/model/views.model/implemntationEnum';
import { HostingEnum } from 'src/business/model/views.model/hostinhEnum';
import { UsersNumberEnum } from 'src/business/model/views.model/usersNumberEnum';

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
  reasonType: string[] = [];
  implemntation!: string;
  hostingType: string[] = [];
  usersNumber!: string;
  fonctions: string[] = [];
  fonctionsStr!: string;
  reasonTypeStr!: string;
  secteurStr!: string;
  hostingTypeStr!: string;

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
      let fileWidth = 180;
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
      this.secteurStr = this.secteur.join(', ');
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

      if (history[0].compatibility.companySize) {
        if (history[0].compatibility.companySize.A) {
          this.cA = 'Moins de 2 M €';
        }
        if (history[0].compatibility.companySize.B) {
          this.cA = '2 à 10 M €';
        }
        if (history[0].compatibility.companySize.C) {
          this.cA = '10 à 50 M €';
        }
        if (history[0].compatibility.companySize.D) {
          this.cA = '50 à 200 M €';
        }
        if (history[0].compatibility.companySize.E) {
          this.cA = '200 M à 1 Mrd €';
        }
        if (history[0].compatibility.companySize.F) {
          this.cA = '1 Mrd € et plus';
        }
      }
      if (history[0].dev) {
        if (history[0].dev.high) {
          this.dev = 'Beaucoup';
        }
        if (history[0].dev.low) {
          this.dev = 'Peu';
        }
        if (history[0].dev.none) {
          this.dev = 'Pas du tout';
        }
      }

      if (history[0].compatibility.size) {
        if (history[0].compatibility.size.A) {
          this.employNumber = '1 à 25';
        }
        if (history[0].compatibility.size.B) {
          this.employNumber = '25 à 75';
        }
        if (history[0].compatibility.size.C) {
          this.employNumber = '75 à 200';
        }
        if (history[0].compatibility.size.D) {
          this.employNumber = '200 à 700';
        }
        if (history[0].compatibility.size.E) {
          this.employNumber = '700 à 2000';
        }
        if (history[0].compatibility.size.F) {
          this.employNumber = 'Plus de 2000';
        }
      }

      if (history[0].compatibility.reason) {
        for (
          let index = 0;
          index < history[0].compatibility.reason.length;
          index++
        ) {
          const element = history[0].compatibility.reason[index];
          if (element.sao) {
            this.reasonType.push(ReasonEnum.sao);
          }
          if (element.mf) {
            this.reasonType.push(ReasonEnum.mf);
          }
          if (element.pi) {
            this.reasonType.push(ReasonEnum.pi);
          }
          if (element.in) {
            this.reasonType.push(ReasonEnum.in);
          }
          if (element.vt) {
            this.reasonType.push(ReasonEnum.vt);
          }
          if (element.other) {
            this.reasonType.push(ReasonEnum.other);
          }
        }

        this.reasonTypeStr = this.reasonType.join(', ');
      }

      if (history[0].compatibility.implemntation) {
        if (history[0].compatibility.implemntation.M1) {
          this.implemntation = implemntationEnum.M1;
        }
        if (history[0].compatibility.implemntation.M6) {
          this.implemntation = implemntationEnum.M6;
        }
        if (history[0].compatibility.implemntation.A1) {
          this.implemntation = implemntationEnum.A1;
        }
        if (history[0].compatibility.implemntation.A100) {
          this.implemntation = implemntationEnum.A100;
        }
        if (history[0].compatibility.implemntation.any) {
          this.implemntation = implemntationEnum.any;
        }
      }
      if (history[0].hosting) {
        for (let index = 0; index < history[0].hosting.length; index++) {
          const element = history[0].hosting[index];
          if (element.cloud) {
            this.hostingType.push(HostingEnum.cloud);
          }
          if (element.onPremise) {
            this.hostingType.push(HostingEnum.onPremise);
          }
          if (element.hybrid) {
            this.hostingType.push(HostingEnum.hybrid);
          }
          if (element.saas) {
            this.hostingType.push(HostingEnum.saas);
          }
          if (element.any) {
            this.hostingType.push(HostingEnum.any);
          }
        }

        this.hostingTypeStr = this.hostingType.join(', ');
      }
      if (history[0].compatibility.usersNumber) {
        if (history[0].compatibility.usersNumber.A) {
          this.usersNumber = UsersNumberEnum.A;
        }
        if (history[0].compatibility.usersNumber.B) {
          this.usersNumber = UsersNumberEnum.B;
        }
        if (history[0].compatibility.usersNumber.C) {
          this.usersNumber = UsersNumberEnum.C;
        }
        if (history[0].compatibility.usersNumber.D) {
          this.usersNumber = UsersNumberEnum.D;
        }
        if (history[0].compatibility.usersNumber.E) {
          this.usersNumber = UsersNumberEnum.E;
        }
        if (history[0].compatibility.usersNumber.F) {
          this.usersNumber = UsersNumberEnum.F;
        }
      }
      if (history[0].compatibility.fonctions) {
        for (
          let index = 0;
          index < history[0].compatibility.fonctions.length;
          index++
        ) {
          const element = history[0].compatibility.fonctions[index].title;
          this.fonctions.push(element);
        }
        this.fonctionsStr = this.fonctions.join(', ');
      }
    }
  }
}
