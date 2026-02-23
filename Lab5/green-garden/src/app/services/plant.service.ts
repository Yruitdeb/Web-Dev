import { Injectable } from '@angular/core';
import { PLANTS, CATEGORIES } from '../data/plant-data';
import { Plant } from '../models/plant.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class PlantService {

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getPlantsByCategory(categoryId: number): Plant[] {
    return PLANTS.filter((p: Plant) => p.categoryId === categoryId);
  }

  getAllPlants(): Plant[] {
    return PLANTS;
  }

  filterPlants(plants: Plant[], filters: any): Plant[] {
    return plants.filter((p: Plant) =>
      (!filters.color || p.color === filters.color) &&
      (!filters.type || p.type === filters.type)
    );
  }
}
