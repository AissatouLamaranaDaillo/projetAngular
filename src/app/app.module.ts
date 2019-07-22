import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './pages/logo/logo.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProposComponent } from './pages/propos/propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './template/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AccueilComponent,
    ProposComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
