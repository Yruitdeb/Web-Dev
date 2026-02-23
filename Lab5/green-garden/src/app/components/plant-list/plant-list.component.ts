import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant.model';
import { PlantItemComponent } from '../plant-item/plant-item.component';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, PlantItemComponent],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent {

  @Input() plants: Plant[] = [];

  deletePlant(id: number) {
    this.plants = this.plants.filter(p => p.id !== id);
  }
}
