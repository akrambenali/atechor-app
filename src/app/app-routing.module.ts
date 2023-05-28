import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRevenuesPageComponent } from 'src/features/client-revenues-page/client-revenues-page.component';
import { ClientTypePageComponent } from 'src/features/client-type-page/client-type-page.component';
import { UsersPageComponent } from 'src/features/users-page/users-page.component';
import { SecteurPageComponent } from 'src/features/secteur-page/secteur-page.component';

const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'revenue-client', component: ClientRevenuesPageComponent},
{ path: 'users-client', component: UsersPageComponent  },
{ path: 'type-client', component: ClientTypePageComponent},
{path: 'home', component: SecteurPageComponent},
{path: '**', component: SecteurPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
