import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LayoutModule } from '@angular/cdk/layout';

import { CardItemComponent } from 'src/components/card-item/card-item.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ProgressBarComponent } from 'src/components/shared/progress-bar/progress-bar.component';
import { ResultPageComponent } from 'src/features/result-page/result-page.component';
import { SecteurPageComponent } from 'src/features/secteur-page/secteur-page.component';
import { ItemComponent } from 'src/components/item/item.component';
import { ClientTypePageComponent } from 'src/features/client-type-page/client-type-page.component';
import { ItemButtonComponent } from 'src/components/shared/item-button/item-button.component';
import { ItemButtonStepsComponent } from 'src/components/shared/item-button-steps/item-button-steps.component';
import { ClientRevenuesPageComponent } from 'src/features/client-revenues-page/client-revenues-page.component';
import { UsersPageComponent } from 'src/features/users-page/users-page.component';
import { ClientDeploymentPageComponent } from 'src/features/client-deployment-page/client-deployment-page.component';
import { ClientFonctionsPageComponent } from 'src/features/client-fonctions-page/client-fonctions-page.component';
import { ClientNumbersPageComponent } from 'src/features/client-numbers-page/client-numbers-page.component';
import { ClientHostingPageComponent } from 'src/features/client-hosting-page/client-hosting-page.component';
import { ClientDevPageComponent } from 'src/features/client-dev-page/client-dev-page.component';
import { ClientConnexionPageComponent } from 'src/features/client-connexion-page/client-connexion-page.component';
import { ClientDeadlinePageComponent } from 'src/features/client-deadline-page/client-deadline-page.component';
import { ClientReasonPageComponent } from 'src/features/client-reason-page/client-reason-page.component';
import { ClientCoefficientsPageComponent } from 'src/features/client-coefficients-page/client-coefficients-page.component';
import { ItemCoefficientComponent } from 'src/components/item-coefficient/item-coefficient.component';
import { ClientDataPageComponent } from 'src/features/client-data-page/client-data-page.component';
import { ButtonOptionsComponent } from 'src/components/shared/button-options/button-options.component';
import { ClientCabinetPageComponent } from 'src/features/client-cabinet-page/client-cabinet-page.component';
import { ClientMailPageComponent } from 'src/features/client-mail-page/client-mail-page.component';
import { CoefficientsComponent } from 'src/features/result-page/components/coefficients/coefficients.component';

import { ClientService } from 'src/features/services/client.services';
import { SolutionService } from 'src/features/services/solution.services';



// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    FooterComponent,
    ProgressBarComponent,
    ResultPageComponent,
    SecteurPageComponent,
    ItemComponent,
    ClientTypePageComponent,
    ItemButtonComponent,
    ItemButtonStepsComponent,
    ClientRevenuesPageComponent,
    UsersPageComponent,
    ClientDeploymentPageComponent,
    ClientFonctionsPageComponent,
    ClientNumbersPageComponent,
    ClientHostingPageComponent,
    ClientDevPageComponent,
    ClientConnexionPageComponent,
    ClientDeadlinePageComponent,
    ClientReasonPageComponent,
    ClientCoefficientsPageComponent,
    ItemCoefficientComponent,
    ClientDataPageComponent,
    ButtonOptionsComponent,
    ClientCabinetPageComponent,
    ClientMailPageComponent,
    CoefficientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ClientService, SolutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
