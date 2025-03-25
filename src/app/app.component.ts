import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { RouterModule } from '@angular/router';
import {VoitureListComponent} from './voiture-list/voiture-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, VoitureListComponent], // Importez RouterModule ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private keycloakService: KeycloakService) {}
  title = 'json-front';
  logout() {
    this.keycloakService.logout();
  }
}
