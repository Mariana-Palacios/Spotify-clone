import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { SaveLocalStorageService } from '@services/saveLocalStorage.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Description } from '@interfaces/card-description';

@Component({
  selector: 'app-card-playlist',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatIconModule
  ],
  templateUrl: 'card-playlist.component.html',
  styleUrl: './card-playlist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaylistComponent { 
  public saveLocalStorage = inject(SaveLocalStorageService)

  @Input({ required: true }) description: Description;
  
}
