import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-top-tracks',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'card-top-tracks.component.html',
  styleUrl: './card-top-tracks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTopTracksComponent { }
