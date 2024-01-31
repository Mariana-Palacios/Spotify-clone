import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Description } from '@interfaces/card-description';
import { TimeMsPipe } from '../../pipe/timeMs.pipe';
import { YearPipe } from '../../pipe/year.pipe';

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [
    CommonModule,MatCardModule,MatIconModule,TimeMsPipe,YearPipe
  ],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescriptionComponent {
  @Input({ required: true }) description: Description;
  
}
