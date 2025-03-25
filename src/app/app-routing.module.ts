import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureListComponent } from './modules/voiture/components/voiture-list/voiture-list.component';
import { VoitureAddComponent } from './modules/voiture/components/voiture-add/voiture-add.component';
import { VoitureEditComponent } from './modules/voiture/components/voiture-edit/voiture-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'voitures', pathMatch: 'full' },
  { path: 'voitures', component: VoitureListComponent },
  { path: 'voitures/ajouter', component: VoitureAddComponent },
  { path: 'voitures/modifier/:id', component: VoitureEditComponent },
  { path: '**', redirectTo: 'voitures' } // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
