import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { VoitureListComponent } from './components/voiture-list/voiture-list.component';
import { VoitureAddComponent } from './components/voiture-add/voiture-add.component';
import { VoitureEditComponent } from './components/voiture-edit/voiture-edit.component';
import { VoitureService } from './services/voiture.service';
import {RouterModule} from '@angular/router';
import {KeycloakAuthGuard} from 'keycloak-angular';

@NgModule({
  declarations: [
    VoitureListComponent,
    VoitureAddComponent,
    VoitureEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {path: '', component: VoitureListComponent, canActivate: [KeycloakAuthGuard]},
      {path: 'add', component: VoitureAddComponent, canActivate: [KeycloakAuthGuard]},
      {path: 'edit/:id', component: VoitureEditComponent, canActivate: [KeycloakAuthGuard]}
    ])
  ],
  providers: [VoitureService],

  exports: [
    VoitureListComponent
  ]
})
export class VoitureModule {}
