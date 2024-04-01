import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './tab/tab.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArcOnline';
}
