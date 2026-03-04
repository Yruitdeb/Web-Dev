import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

ngOnInit(): void {
  this.albumId = Number(this.route.snapshot.paramMap.get('id'));
  console.log('Album ID:', this.albumId);

  this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
    console.log('Photos received:', data);
    this.photos = data;
    this.loading = false;
  });
}

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
