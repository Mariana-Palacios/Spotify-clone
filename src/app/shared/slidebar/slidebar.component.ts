import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { SaveLocalStorageService } from '@services/saveLocalStorage.service';
import { CardPlaylistComponent } from '@shared/card-playlist/card-playlist.component';

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, MatTooltipModule, MatButtonModule, CardPlaylistComponent
  ],
  templateUrl: 'slidebar.component.html',
  styleUrl: './slidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidebarComponent {

  public saveLocalStorage = inject(SaveLocalStorageService)

  favorites = signal(this.saveLocalStorage.favoriteHistory)

  constructor(){
    console.log('FAVORITES')
    console.log(this.favorites())
  }

}
