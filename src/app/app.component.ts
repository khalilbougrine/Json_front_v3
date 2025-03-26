import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {VoitureListComponent} from './modules/voiture/components/voiture-list/voiture-list.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private keycloakService: KeycloakService , private router: Router) {}
  title = 'json-front';
  logout() {
    this.keycloakService.logout();
  }
}
