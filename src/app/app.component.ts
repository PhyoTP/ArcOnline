import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { CommandBarComponent } from './command-bar/command-bar.component';
import { commandBarIsActive } from '../url';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabComponent,TabBarComponent, CommandBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArcOnline';
  closeCommandBar() {
    if (commandBarIsActive[0]) {
      commandBarIsActive[0] = false
    }
  }
}
