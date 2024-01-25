import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    //components
    NavbarComponent
  ],
  templateUrl: 'spotify.component.html',
  styleUrl: './spotify.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpotifyComponent { }
