import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }
}

