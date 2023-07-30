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
import { ClientCabinetPageComponent } from 'src/features/client-cabinet-page/client-cabinet-page.component';
import { ClientMailPageComponent } from 'src/features/client-mail-page/client-mail-page.component';

const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'revenue-client', component: ClientRevenuesPageComponent},
{ path: 'users-client', component: UsersPageComponent  },
{ path: 'type-client', component: ClientTypePageComponent},
{ path: 'deploiment-client', component: ClientDeploymentPageComponent},
{ path: 'fonctions-client', component: ClientFonctionsPageComponent},
{ path: 'numbers-client', component: ClientNumbersPageComponent},
{ path: 'hosting-client', component: ClientHostingPageComponent},
{ path: 'dev-client', component: ClientDevPageComponent},
{ path: 'connexion-client', component: ClientConnexionPageComponent},
{ path: 'resultat-client', component: ResultPageComponent},
{ path: 'deadline-client', component: ClientDeadlinePageComponent},
{ path: 'reason-client', component: ClientReasonPageComponent},
{ path: 'coefficients-client', component: ClientCoefficientsPageComponent},
{ path: 'infos-client', component: ClientDataPageComponent},
{ path: 'infos-cabinet', component: ClientCabinetPageComponent},
{ path: 'mail-client', component: ClientMailPageComponent},

 




{ path: 'home', component: SecteurPageComponent},
{ path: '**', component: SecteurPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
