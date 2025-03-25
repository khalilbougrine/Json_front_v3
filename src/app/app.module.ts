import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { keycloakConfig } from './keycloak.config';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureAddComponent } from './voiture-add/voiture-add.component';
import {FormsModule} from '@angular/forms';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

// Fonction d'initialisation de Keycloak
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: keycloakConfig,
      initOptions: {
        onLoad: 'login-required', // Force la connexion au démarrage
        checkLoginIframe: false
      }
    });
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    KeycloakAngularModule, // Module Keycloak
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
