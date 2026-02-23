import { Component, OnInit } from '@angular/core';
import { Plant } from './models/plant.model';
import { Category } from './models/category.model';
import { PlantService } from './services/plant.service';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, PlantListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  plants: Plant[] = [];
  selectedColor: string = '';
  selectedType: string = '';

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.categories = this.plantService.getCategories();
    this.applyFilters(); // show all plants on load
  }

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
    this.applyFilters();
  }

  applyFilters() {
    let plants: Plant[] = [];
    if (this.selectedCategoryId !== null) {
      // get plants for selected category
      plants = this.plantService.getPlantsByCategory(this.selectedCategoryId);
    } else {
      // if no category is selected, show ALL plants
      plants = this.plantService.getAllPlants();
    }
    // apply filters (color/type)
    plants = this.plantService.filterPlants(plants, {
      color: this.selectedColor,
      type: this.selectedType
    });
    this.plants = plants;
  }
}
