import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-item.component.html',
  styleUrls: ['./plant-item.component.css']
})
export class PlantItemComponent {

  @Input() plant!: Plant;
  @Output() delete = new EventEmitter<number>();

  currentImageIndex = 0;

  like() {
    this.plant.likes++;
  }

  remove() {
    this.delete.emit(this.plant.id);
  }

  next() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.plant.images.length;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.plant.link);
    window.open(`https://wa.me/?text=Check this plant: ${url}`);
  }

  shareTelegram() {
    const url = encodeURIComponent(this.plant.link);
    const text = encodeURIComponent(this.plant.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`);
  }
}
