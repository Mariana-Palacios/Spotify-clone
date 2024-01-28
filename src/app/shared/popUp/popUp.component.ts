import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>popUp works!</p>`,
  styleUrl: './popUp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopUpComponent { }
