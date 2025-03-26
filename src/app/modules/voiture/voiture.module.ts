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
import {MatIcon} from "@angular/material/icon";

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
        RouterModule,
        MatIcon
    ],
  providers: [VoitureService],

  exports: [
    VoitureListComponent,
    VoitureEditComponent,
    VoitureAddComponent
  ]
})
export class VoitureModule {}
