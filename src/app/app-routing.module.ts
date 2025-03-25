import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureAddComponent } from './voiture-add/voiture-add.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

const routes: Routes = [
  { path: '', component: VoitureListComponent, canActivate: [KeycloakAuthGuard] },
  { path: 'add', component: VoitureAddComponent, canActivate: [KeycloakAuthGuard] },
  { path: 'edit/:id', component: VoitureEditComponent, canActivate: [KeycloakAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
