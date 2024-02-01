import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyApiService } from '@services/spotifyApi.service';
import { ENV } from '@constants/env';
import { SlidebarComponent } from '@shared/slidebar/slidebar.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, MatGridListModule,
    //
    SlidebarComponent
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
        this.spotifyService.setToken(data)
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }
}
