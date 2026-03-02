import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
