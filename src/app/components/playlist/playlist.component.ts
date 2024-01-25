import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>playlist works!</p>`,
  styleUrl: './playlist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PlaylistComponent { }
