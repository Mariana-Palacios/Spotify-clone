import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { CardAlbumComponent } from '@shared/card-album/card-album.component';
import { Tracks } from '@interfaces/tracks';
import { mockTracks } from './__mocks__/mockTracks';
import { mockAlbums } from './__mocks__/mockAlbums';
import { Albums } from '@interfaces/albums';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    CommonModule,
    CardAlbumComponent
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArtistComponent { 
  public spotifyService = inject(SpotifyApiService)

  albums = signal<Albums>(mockAlbums)
  topTracks = signal<Tracks>(mockTracks)
  isActive = signal<boolean>(true)

  constructor(){
    this.spotifyService.getActristAlbums().subscribe(
      (data)=>{
        this.albums.set(data)
        console.log('Albums')
        console.log(this.albums())
      }
    )
    this.spotifyService.getActrisTopTracks().subscribe(
      (data)=>{
        this.topTracks.set(data)
        console.log('top Tracks')
        console.log(this.topTracks().tracks)
      }
    )
  }

  toggleDescription(){
    console.log('Toggle description')
    console.log('Antes:'+this.isActive())
    this.isActive.set(!this.isActive())
    console.log('Despues:'+this.isActive())
  }
}
