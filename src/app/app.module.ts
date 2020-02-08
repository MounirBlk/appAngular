import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { DonneesService } from './services/donnees.service';

import { FormsModule } from '@angular/forms';
import { AppareilComponent } from './appareil/appareil.component';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    AppareilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
