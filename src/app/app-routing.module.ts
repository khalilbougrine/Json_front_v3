import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureListComponent } from './modules/voiture/components/voiture-list/voiture-list.component';
import { VoitureAddComponent } from './modules/voiture/components/voiture-add/voiture-add.component';
import { VoitureEditComponent } from './modules/voiture/components/voiture-edit/voiture-edit.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: VoitureListComponent,  // Page par défaut
    canActivate: [AuthGuard]
  },
  {
    path: 'ajouter',
    component: VoitureAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }  // Uniquement pour admin
  },
  {
    path: 'modifier/:id',
    component: VoitureEditComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }  // Uniquement pour admin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
