import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {VoitureAddComponent} from './modules/voiture/components/voiture-add/voiture-add.component';
import {VoitureListComponent} from './modules/voiture/components/voiture-list/voiture-list.component';

const routes: Routes = [
  {
    path: 'voitures',
    component: VoitureListComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'voitures', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
