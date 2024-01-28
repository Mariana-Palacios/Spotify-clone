import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { ENV } from '@constants/env';
import { MainComponent } from '@shared/main/main.component';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, 
    //
    NavbarComponent, MainComponent
  ],
  providers: [SpotifyApiService],
  templateUrl: 'spotify.component.html',
  styleUrl: './spotify.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class SpotifyComponent { 

  public spotifyService = inject(SpotifyApiService)

  constructor(){
    this.spotifyService.getToken(ENV.clientId, ENV.clientSecret).subscribe(
      (data) => {
        this.spotifyService.getPlaylist(data.access_token).subscribe(
          (data) => {
            this.spotifyService.setActristList(this.spotifyService.getArtists(data))
          }
        )
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }
  ngOnInit(): void {

  }

}
