import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>artist works!</p>`,
  styleUrl: './artist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArtistComponent { }
