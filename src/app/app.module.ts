import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardItemComponent } from 'src/components/card-item/card-item.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ProgressBarComponent } from 'src/components/shared/progress-bar/progress-bar.component';
import { ResultPageComponent } from 'src/features/result-page/result-page.component';
import { SecteurPageComponent } from 'src/features/secteur-page/secteur-page.component';
import { ItemComponent } from 'src/components/item/item.component';
import { ClientTypePageComponent } from 'src/features/client-type-page/client-type-page.component';
import { ItemButtonComponent } from 'src/components/shared/item-button/item-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent,
    ResultPageComponent,
    SecteurPageComponent,
    ItemComponent,
    ClientTypePageComponent,
    ItemButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
