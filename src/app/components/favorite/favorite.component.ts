import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {

}
