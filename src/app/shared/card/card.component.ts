import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic cards
 */
@Component({
  selector: 'app-card',
  styleUrl: 'card.component.css',
  templateUrl: 'card.component.html',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
})
export class CardComponent { 
  @Input({ required: true }) title!: string;
  @Input({ required: true }) year!: string;
}
