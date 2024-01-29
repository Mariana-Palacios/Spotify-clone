import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { CardComponent } from '@shared/card/card.component';


@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArtistComponent { 
  public spotifyService = inject(SpotifyApiService)

  constructor(){
    console.log('Hola Mundo')
    this.spotifyService.getActristAlbums().subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
    this.spotifyService.getActrisTopTracks().subscribe(
      (data)=>{
        console.log('topTrack ---')
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
