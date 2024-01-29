import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { ENV } from '@constants/env';
import { SearchArtistComponent } from '@components/search-artist/search-artist.component';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, 
    //
    NavbarComponent, SearchArtistComponent
  ],
  providers: [SpotifyApiService],
  templateUrl: 'spotify.component.html',
  styleUrl: './spotify.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class SpotifyComponent { 

  public spotifyService = inject(SpotifyApiService)

  constructor(){
    this.spotifyService.getSpotifyToken(ENV.clientId, ENV.clientSecret).subscribe(
      (data) => {
        //spotify
        console.log(data)
        this.spotifyService.setToken(data)
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }
  ngOnInit(): void {

  }

}
