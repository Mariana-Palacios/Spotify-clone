import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { CardAlbumComponent } from '@shared/card-album/card-album.component';
import { Tracks } from '@interfaces/tracks';
import { Albums } from '@interfaces/albums';
import { CardDescriptionComponent } from '@shared/card-description/card-description.component';
import { Description } from '@interfaces/card-description'
import { MatIconModule } from '@angular/material/icon';
import { mockDescription } from './__mocks__/mockDescription';
import { mockTracks } from './__mocks__/mockTracks';
import { mockAlbums } from './__mocks__/mockAlbums';
import { SaveLocalStorageService } from '@services/saveLocalStorage.service';
import { TimeMsPipe } from '../../pipe/timeMs.pipe';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    CommonModule,
    CardAlbumComponent,
    CardDescriptionComponent,
    MatIconModule,
    TimeMsPipe
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArtistComponent { 
  public spotifyService = inject(SpotifyApiService)
  public saveLocalStorage = inject(SaveLocalStorageService)
  
  albums = signal<Albums>(mockAlbums)
  topTracks = signal<Tracks>(mockTracks)
  description = signal<Description>(mockDescription)
  isActive = signal<boolean>(true)

  constructor(){
    this.spotifyService.getActristAlbums().subscribe(
      (data)=>{
        this.albums.set(data)
      }
    )
    this.spotifyService.getActrisTopTracks().subscribe(
      (data)=>{
        this.topTracks.set(data)
      }
    )
  }

  selectionImg(img:string){
    return img?img:'assets/spotify_logo.png'
  }
  
  toggleDescription(type:string,description:any){
    console.log('Toggle description')
    console.log(description)
    switch (type) {
      case 'Album': 
        const album:Description = {
          logo: {
            url: this.selectionImg(description.images[0].url)
          },
          type: type,
          title: description.name,
          img: {
            url: ''
          },
          nameArtist: description.artists[0].name,
          year: description.release_date,
          countSongs: description.total_tracks
        }
        this.isActive.set(!this.isActive())
        return this.description.set(album)
      case 'Tracks':
        const tracks:Description = {
          logo: {
            url: this.selectionImg(description.album.images[0].url)
          },
          type: 'Song',
          title: description.name,
          img: {
            url: ''
          },
          nameArtist: description.artists[0].name,
          nameAlbum: description.album.name,
          year: description.album.release_date,
          countSongs: description.popularity,
          time: description.duration_ms
        }
        this.isActive.set(!this.isActive())
        return this.description.set(tracks)
      default:
        console.log('Default')
        this.isActive.set(!this.isActive())
        return this.description.set(mockDescription)
    }
  }
}
