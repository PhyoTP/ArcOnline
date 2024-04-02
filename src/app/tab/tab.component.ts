import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: `
  <div class="iframe-container">
    <iframe src="https://arc.net"></iframe>
  </div>
  `,
  styleUrl: './tab.component.css'
})
export class TabComponent {

}
