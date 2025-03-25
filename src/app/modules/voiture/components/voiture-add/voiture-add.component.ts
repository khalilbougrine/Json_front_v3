import { Component } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Router } from '@angular/router';
import { Voiture } from '../../models/voiture';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voiture-add',
  standalone : false,
  templateUrl: './voiture-add.component.html',
  styleUrls: ['./voiture-add.component.css']
})
export class VoitureAddComponent {
  voiture: Voiture = {
    matricule: '',
    marque: '',
    modele: '',
    annee: 0,
    kilometrage: 0
  };

  constructor(private voitureService: VoitureService, public router: Router) {}

  // Ajouter une voiture
  addVoiture(): void {
    this.voitureService.addVoiture(this.voiture).subscribe(() => {
      this.router.navigate(['/']); // Rediriger vers la liste des voitures après l'ajout
    });
  }
}
