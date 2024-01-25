import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatChipsModule, MatButtonToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify';
}
