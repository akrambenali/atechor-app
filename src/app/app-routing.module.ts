import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRevenuesPageComponent } from 'src/features/client-revenues-page/client-revenues-page.component';
import { ClientTypePageComponent } from 'src/features/client-type-page/client-type-page.component';
import { UsersPageComponent } from 'src/features/users-page/users-page.component';
import { SecteurPageComponent } from 'src/features/secteur-page/secteur-page.component';
import { ClientDeploymentPageComponent } from 'src/features/client-deployment-page/client-deployment-page.component';
import { ClientFonctionsPageComponent } from 'src/features/client-fonctions-page/client-fonctions-page.component';
import { ClientNumbersPageComponent } from 'src/features/client-numbers-page/client-numbers-page.component';
import { ClientHostingPageComponent } from 'src/features/client-hosting-page/client-hosting-page.component';
import { ClientDevPageComponent } from 'src/features/client-dev-page/client-dev-page.component';
import { ClientConnexionPageComponent } from 'src/features/client-connexion-page/client-connexion-page.component';
import { ResultPageComponent } from 'src/features/result-page/result-page.component';
import { ClientDeadlinePageComponent } from 'src/features/client-deadline-page/client-deadline-page.component';
import { ClientReasonPageComponent } from 'src/features/client-reason-page/client-reason-page.component';
import { ClientCoefficientsPageComponent } from 'src/features/client-coefficients-page/client-coefficients-page.component';
import { ClientDataPageComponent } from 'src/features/client-data-page/client-data-page.component';
import { ClientMailPageComponent } from 'src/features/client-mail-page/client-mail-page.component';
import { ClientCabinetConseilComponent } from 'src/features/client-cabinet-conseil-page/client-cabinet-conseil-page.component';
import { ClientDataSelectPageComponent } from 'src/features/client-data-select-page/client-data-select-page .component';
import { ClientDataPageLightComponent } from 'src/features/client-data-light-page/client-data-light-page.component';
/* CRM */
import { SecteurPageCrmComponent } from 'src/features-crm/secteur-page-crm/secteur-crm-page.component';
import { ClientCoefficientsPageCrmComponent } from 'src/features-crm/client-coefficients-page-crm/client-coefficients-crm-page.component';
import { ClientCabinetConseilCrmComponent } from 'src/features-crm/client-cabinet-conseil-page-crm/client-cabinet-conseil-crm-page.component';
import { ClientConnexionPageCrmComponent } from 'src/features-crm/client-connexion-page-crm/client-connexion-crm-page.component';
import { ClientDataPageLightCrmComponent } from 'src/features-crm/client-data-light-page-crm/client-data-light-crm-page.component';
import { ClientTypePageCrmComponent } from 'src/features-crm/client-type-page-crm/client-type-crm-page.component';
import { ClientRevenuesPageCrmComponent } from 'src/features-crm/client-revenues-page-crm/client-revenues-crm-page.component';
import { ClientDataPageCrmComponent } from 'src/features-crm/client-data-page-crm/client-data-crm-page.component';
import { ClientDataSelectPageCrmComponent } from 'src/features-crm/client-data-select-page-crm/client-data-select-crm-page .component';
import { ClientDeadlinePageCrmComponent } from 'src/features-crm/client-deadline-page-crm/client-deadline-crm-page.component';
import { ClientDeploymentPageCrmComponent } from 'src/features-crm/client-deployment-page-crm/client-deployment-crm-page.component';
import { ClientDevPageCrmComponent } from 'src/features-crm/client-dev-page-crm/client-dev-crm-page.component';
import { ClientHostingPageCrmComponent } from 'src/features-crm/client-hosting-page-crm/client-hosting-crm-page.component';
import { ClientMailPageCrmComponent } from 'src/features-crm/client-mail-page-crm/client-mail-crm-page.component';
import { ClientNumbersPageCrmComponent } from 'src/features-crm/client-numbers-page-crm/client-numbers-page.component';
import { ClientReasonPageCrmComponent } from 'src/features-crm/client-reason-page-crm/client-reason-crm-page.component';
import { ClientFonctionsPageCrmComponent } from 'src/features-crm/client-fonctions-page-crm/client-fonctions-crm-page.component';
import { UsersPageCrmComponent } from 'src/features-crm/users-page-crm/users-crm-page.component';
import { ResultPageCrmComponent } from 'src/features-crm/result-page/result-crm-page.component';

const routes: Routes = [
  { path: 'erp/revenue-client', component: ClientRevenuesPageComponent },
  { path: 'erp/users-client', component: UsersPageComponent },
  { path: 'erp/type-client', component: ClientTypePageComponent },
  { path: 'erp/deploiment-client', component: ClientDeploymentPageComponent },
  { path: 'erp/fonctions-client', component: ClientFonctionsPageComponent },
  { path: 'erp/numbers-client', component: ClientNumbersPageComponent },
  { path: 'erp/hosting-client', component: ClientHostingPageComponent },
  { path: 'erp/dev-client', component: ClientDevPageComponent },
  { path: 'erp/connexion-client', component: ClientConnexionPageComponent },
  { path: 'erp/resultat-client/:id', component: ResultPageComponent },
  { path: 'erp/deadline-client', component: ClientDeadlinePageComponent },
  { path: 'erp/reason-client', component: ClientReasonPageComponent },
  { path: 'erp/coefficients-client', component: ClientCoefficientsPageComponent },
  { path: 'erp/infos-client', component: ClientDataPageComponent },
  { path: 'erp/mail-client', component: ClientMailPageComponent },
  { path: 'erp/cabinet-conseil', component: ClientCabinetConseilComponent },
  { path: 'erp/select-data', component: ClientDataSelectPageComponent },
  { path: 'erp/infos-client-light', component: ClientDataPageLightComponent },
  { path: 'erp', component: SecteurPageComponent },
  { path: 'crm/revenue-client', component: ClientRevenuesPageCrmComponent },
  { path: 'crm/users-client', component: UsersPageCrmComponent },
  { path: 'crm/type-client', component: ClientTypePageCrmComponent },
  { path: 'crm/deploiment-client', component: ClientDeploymentPageCrmComponent },
  { path: 'crm/fonctions-client', component: ClientFonctionsPageCrmComponent },
  { path: 'crm/numbers-client', component: ClientNumbersPageCrmComponent },
  { path: 'crm/hosting-client', component: ClientHostingPageCrmComponent },
  { path: 'crm/dev-client', component: ClientDevPageCrmComponent },
  { path: 'crm/connexion-client', component: ClientConnexionPageCrmComponent },
  { path: 'crm/resultat-client/:id', component: ResultPageCrmComponent },
  { path: 'crm/deadline-client', component: ClientDeadlinePageCrmComponent },
  { path: 'crm/reason-client', component: ClientReasonPageCrmComponent },
  { path: 'crm/coefficients-client', component: ClientCoefficientsPageCrmComponent },
  { path: 'crm/infos-client', component: ClientDataPageCrmComponent },
  { path: 'crm/mail-client', component: ClientMailPageCrmComponent },
  { path: 'crm/cabinet-conseil', component: ClientCabinetConseilCrmComponent },
  { path: 'crm/select-data', component: ClientDataSelectPageCrmComponent },
  { path: 'crm/infos-client-light', component: ClientDataPageLightCrmComponent },
  { path: 'crm', component: SecteurPageCrmComponent },

  { path: '**', component: SecteurPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
