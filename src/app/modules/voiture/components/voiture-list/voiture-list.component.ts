import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { FileService } from '../../services/file.service';
import { Voiture } from '../../models/voiture';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-list',
  standalone : false,
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  allVoitures: Voiture[] = []; // Stocke toutes les voitures
  filteredVoitures: Voiture[] = []; // Voitures filtrées
  currentPageData: Voiture[] = []; // Données de la page actuelle
  page = 0; // Page actuelle
  size = 5; // Nombre d'éléments par page
  pageSizeOptions = [5, 10, 20]; // Options de taille de page
  totalElements = 0; // Nombre total de voitures
  searchField: string = 'matricule'; // Champ de recherche
  searchQuery: string = ''; // Terme de recherche

  // Colonnes à afficher dans le tableau
  displayedColumns: string[] = ['matricule', 'marque', 'modele', 'annee', 'kilometrage', 'actions'];

  constructor(private voitureService: VoitureService, private fileService: FileService, public router: Router) {}

  ngOnInit(): void {
    this.loadAllVoitures(); // Charge toutes les données une seule fois
  }
  navigateToAdd() {
    this.router.navigate(['/voitures/ajouter']);
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/voitures/modifier', id]);
  }

  // Charger toutes les voitures
  loadAllVoitures(): void {
    this.voitureService.getVoitures(0, 10000, '').subscribe(response => {
      this.allVoitures = response.content;
      this.filteredVoitures = [...this.allVoitures];
      this.totalElements = this.allVoitures.length;
      this.updateCurrentPageData(); // Initialiser les données de la page actuelle
    });
  }

  // Gérer le changement de page
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.updateCurrentPageData();
  }

  // Mettre à jour les données de la page actuelle
  updateCurrentPageData(): void {
    const startIndex = this.page * this.size;
    const endIndex = startIndex + this.size;
    this.currentPageData = this.filteredVoitures.slice(startIndex, endIndex);
  }

  editVoiture(id: number): void {
    this.router.navigate(['/edit', id]); // Redirige vers la page d'édition
  }

  // Gérer la recherche
  onSearch(): void {
    this.filteredVoitures = this.searchQuery
      ? this.allVoitures.filter(v =>
        String(v[this.searchField as keyof Voiture]).toLowerCase()
          .includes(this.searchQuery.toLowerCase()))
      : [...this.allVoitures];

    this.totalElements = this.filteredVoitures.length;
    this.page = 0; // Réinitialiser à la première page
    this.updateCurrentPageData(); // Mettre à jour les données de la page actuelle
  }

  // Supprimer une voiture
  deleteVoiture(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      this.voitureService.deleteVoiture(id).subscribe(() => {
        this.loadAllVoitures(); // Recharger la liste après suppression
      });
    }
  }

  // Télécharger le fichier JSON
  downloadFile(): void {
    this.fileService.downloadFile().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'voitures.json';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
