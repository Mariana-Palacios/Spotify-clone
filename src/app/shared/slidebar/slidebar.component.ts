import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>slidebar works!</p>`,
  styleUrl: './slidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidebarComponent { }
