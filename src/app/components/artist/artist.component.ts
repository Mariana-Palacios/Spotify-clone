import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

}
