import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compatibility, SecteurItem, Solutions } from 'src/business/model/solution.model';

@Component({
  selector: 'app-secteur-crm-page',
  templateUrl: './secteur-crm-page.component.html',
  styleUrls: ['./secteur-crm-page.component.css'],
})
export class SecteurPageCrmComponent implements OnInit {
  solutionModel = {} as Solutions;
  compatibility = {} as Compatibility;
  secteur!: SecteurItem;
  isEmpty: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  pushSecteur(newItem: any) {
    this.secteur = newItem;
    this.checkDisabledItem(this.secteur);
    this.isEmpty = false;
    this.compatibility.secteur = this.secteur;
    this.solutionModel.compatibility = this.compatibility;
    this.goToRoute('crm/type-client');
  }

  checkDisabledItem(item: SecteurItem) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    const F = document.getElementById('F');
    const G = document.getElementById('G');
    const H = document.getElementById('H');
    const I = document.getElementById('I');
    if (item.codeSecteur === 'services') {
      if (B != null && C != null && D != null && E != null && F != null && G != null && H != null && I != null) {
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'manufacturing') {
      if (A != null && C != null && D != null && E != null && F != null && G != null && H != null && I != null) {
        A.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'construction') {
      if (A != null && B != null && D != null && E != null && F != null && G != null && H != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'retail') {
      if (A != null && B != null && C != null && E != null && F != null && G != null && H != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'finance') {
      if (A != null && B != null && C != null && D != null && F != null && G != null && H != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'govNgo') {
      if (A != null && B != null && C != null && D != null && E != null && G != null && H != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'energy') {
      if (A != null && B != null && C != null && D != null && E != null && F != null && H != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        H.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'transport') {
      if (A != null && B != null && C != null && D != null && E != null && F != null && G != null && I != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        I.classList.add('disabled');
      }
    } else if (item.codeSecteur === 'aerospace') {
      if (A != null && B != null && C != null && D != null && E != null && F != null && G != null && H != null) {
        A.classList.add('disabled');
        B.classList.add('disabled');
        C.classList.add('disabled');
        D.classList.add('disabled');
        E.classList.add('disabled');
        F.classList.add('disabled');
        G.classList.add('disabled');
        H.classList.add('disabled');
      }
    }
  }

  getStatus(status: boolean) {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const C = document.getElementById('C');
    const D = document.getElementById('D');
    const E = document.getElementById('E');
    const F = document.getElementById('F');
    const G = document.getElementById('G');
    const H = document.getElementById('H');
    const I = document.getElementById('I');
    if (!status) {
      if (
        A != null &&
        B != null &&
        C != null &&
        D != null &&
        E != null &&
        F != null &&
        G != null &&
        H != null &&
        I != null
      ) {
        A.classList.remove('disabled');
        B.classList.remove('disabled');
        C.classList.remove('disabled');
        D.classList.remove('disabled');
        E.classList.remove('disabled');
        F.classList.remove('disabled');
        G.classList.remove('disabled');
        H.classList.remove('disabled');
        I.classList.remove('disabled');
      }
    }
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route, { state: this.solutionModel });
  }
}
