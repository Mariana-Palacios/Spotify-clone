import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic cards
 */
@Component({
  selector: 'app-card-album',
  styleUrl: 'card-album.component.css',
  templateUrl: 'card-album.component.html',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
})
export class CardAlbumComponent { 
  @Input({ required: true }) title!: string;
  @Input({ required: true }) year!: string;
}
