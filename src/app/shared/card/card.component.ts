import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card.component.css',
  templateUrl: 'card.component.html',
  standalone: true,
  imports: [MatCardModule],
})
export class CardComponent { }
