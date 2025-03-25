import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../models/voiture';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voiture-edit',
  imports: [FormsModule],
  templateUrl: './voiture-edit.component.html',
  standalone: true,
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {
  voiture: Voiture = {
    id: 0,
    matricule: '',
    marque: '',
    modele: '',
    annee: 0,
    kilometrage: 0
  };

  constructor(
    private voitureService: VoitureService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Convertir en nombre
    if (id) {
      this.voitureService.getVoitureById(id).subscribe((data: Voiture) => {
        this.voiture = data;
      });
    }
  }

  updateVoiture(): void {
    if (this.voiture.id) { // Vérifiez que l'ID est défini
      this.voitureService.updateVoiture(this.voiture.id, this.voiture).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
