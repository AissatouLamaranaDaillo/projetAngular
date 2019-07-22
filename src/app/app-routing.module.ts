import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProposComponent } from './pages/propos/propos.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
 { path: 'accueil',
  component: AccueilComponent},
  
  {path: 'propos',
component: ProposComponent},
{path: 'contact',
component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
