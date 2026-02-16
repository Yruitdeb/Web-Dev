import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {



products: Product[] = [
  {
    id: 175698,
    name: 'AMD Ryzen 7 7700',
    description: '8 cores / 16 threads, Zen 4 architecture (5nm). 32MB L3 cache and 65W TDP. Great balance for gaming and productivity.',
    price: 140990,
    rating: 4.8,
    image: 'assets/7700.jpg',
    images: ['assets/7700.jpg','assets/7700-2.jpg','assets/7700-3.jpg'],
    link: 'https://kaspi.kz/shop/p/175698'
  },
  {
    id: 166223,
    name: 'AMD Ryzen 7 7700X',
    description: '8 cores / 16 threads, Zen 4 architecture. Higher 4.5GHz base clock, 32MB L3 cache.',
    price: 154990,
    rating: 4.6,
    image: 'assets/7700x.jpg',
    images: ['assets/7700x.jpg','assets/7700x-2.jpg','assets/7700x-3.jpg'],
    link: 'https://kaspi.kz/shop/p/166223'
  },
  {
    id: 181694,
    name: 'AMD Ryzen 7 9700X',
    description: 'Zen 5 4nm processor with 8 cores and 16 threads. 32MB L3 cache, 65W TDP.',
    price: 174990,
    rating: 5,
    image: 'assets/9700x.jpg',
    images: ['assets/9700x.jpg','assets/9700x-2.jpg','assets/9700x-3.jpg'],
    link: 'https://kaspi.kz/shop/p/181694'
  },
  {
    id: 175290,
    name: 'AMD Ryzen 7 7800X3D',
    description: 'Gaming-focused Zen 4 CPU with massive 96MB L3 cache (3D V-Cache). 120W TDP.',
    price: 199990,
    rating: 5,
    image: 'assets/7800x3d.jpg',
    images: ['assets/7800x3d.jpg','assets/7800x3d-2.jpg','assets/7800x3d-3.jpg'],
    link: 'https://kaspi.kz/shop/p/175290'
  },
  {
    id: 167975,
    name: 'Intel Core i9 13900KF',
    description: '24 cores / 32 threads, Raptor Lake architecture. No integrated graphics. 253W TDP.',
    price: 236990,
    rating: 5,
    image: 'assets/13900kf.jpg',
    images: ['assets/13900kf.jpg','assets/13900kf-2.jpg','assets/13900kf-3.jpg'],
    link: 'https://kaspi.kz/shop/p/167975'
  },
  {
    id: 165829,
    name: 'Intel Core i9 13900K',
    description: '24 cores / 32 threads with Intel UHD 770 graphics. High-end Raptor Lake CPU.',
    price: 247590,
    rating: 4.9,
    image: 'assets/13900k.jpg',
    images: ['assets/13900k.jpg','assets/13900k-2.jpg','assets/13900k-3.jpg'],
    link: 'https://kaspi.kz/shop/p/165829'
  },
  {
    id: 169358,
    name: 'Intel Core i9 13900F',
    description: '24 cores / 32 threads, Raptor Lake. No integrated graphics. 219W TDP.',
    price: 249990,
    rating: 4.8,
    image: 'assets/13900f.jpg',
    images: ['assets/13900f.jpg','assets/13900f-2.jpg','assets/13900f-3.jpg'],
    link: 'https://kaspi.kz/shop/p/169358'
  },
  {
    id: 183164,
    name: 'AMD Ryzen 9 9900X',
    description: '12 cores / 24 threads, Zen 5 4nm architecture. 64MB L3 cache, 120W TDP.',
    price: 259990,
    rating: 4.9,
    image: 'assets/9900x.jpg',
    images: ['assets/9900x.jpg','assets/9900x-2.jpg','assets/9900x-3.jpg'],
    link: 'https://kaspi.kz/shop/p/183164'
  },
  {
    id: 174586,
    name: 'Intel Core i9 14900KF',
    description: '24 cores / 32 threads, upgraded Raptor Lake refresh. No iGPU. 253W TDP.',
    price: 289990,
    rating: 4.7,
    image: 'assets/14900kf.jpg',
    images: ['assets/14900kf.jpg','assets/14900kf-2.jpg','assets/14900kf-3.jpg'],
    link: 'https://kaspi.kz/shop/p/174586'
  },
  {
    id: 170602,
    name: 'Intel Core i9 13900',
    description: '24 cores / 32 threads with Intel UHD 770 graphics. 219W TDP.',
    price: 296900,
    rating: 4.6,
    image: 'assets/13900.jpg',
    images: ['assets/13900.jpg','assets/13900-2.jpg','assets/13900-3.jpg'],
    link: 'https://kaspi.kz/shop/p/170602'
  },
  {
    id: 184277,
    name: 'AMD Ryzen 7 9800X3D',
    description: 'Zen 5 4nm gaming CPU with 96MB L3 cache and 120W TDP.',
    price: 299990,
    rating: 5,
    image: 'assets/9800x3d.jpg',
    images: ['assets/9800x3d.jpg','assets/9800x3d-2.jpg','assets/9800x3d-3.jpg'],
    link: 'https://kaspi.kz/shop/p/184277'
  },
  {
    id: 183165,
    name: 'AMD Ryzen 9 9950X (Discountedc)',
    description: '16 cores / 32 threads, Zen 5 4nm architecture. 64MB L3 cache, 170W TDP.',
    price: 308990,
    rating: 4.9,
    image: 'assets/9950x-discount.jpg',
    images: ['assets/9950x-discount.jpg','assets/9950x-discount-2.jpg','assets/9950x-discount-3.jpg'],
    link: 'https://kaspi.kz/shop/p/183165'
  },
  {
    id: 174587,
    name: 'Intel Core i9 14900K',
    description: '24 cores / 32 threads with UHD 770 graphics. Flagship Raptor Lake refresh.',
    price: 319990,
    rating: 5,
    image: 'assets/14900k.jpg',
    images: ['assets/14900k.jpg','assets/14900k-2.jpg','assets/14900k-3.jpg'],
    link: 'https://kaspi.kz/shop/p/174587'
  },
  {
    id: 168009,
    name: 'AMD Ryzen 9 7950X',
    description: '16 cores / 32 threads, Zen 4 architecture. 64MB L3 cache, 170W TDP.',
    price: 325900,
    rating: 5,
    image: 'assets/7950x.jpg',
    images: ['assets/7950x.jpg','assets/7950x-2.jpg','assets/7950x-3.jpg'],
    link: 'https://kaspi.kz/shop/p/168009'
  },
  {
    id: 199950,
    name: 'AMD Ryzen 9 9950X',
    description: 'Latest Zen 5 flagship with 16 cores / 32 threads, 64MB L3 cache and 170W TDP.',
    price: 339990,
    rating: 5,
    image: 'assets/9950x.jpg',
    images: ['assets/9950x.jpg','assets/9950x-2.jpg','assets/9950x-3.jpg'],
    link: 'https://kaspi.kz/shop/p/9950x'
  }
];

}

