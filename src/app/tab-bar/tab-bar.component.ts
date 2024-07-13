import { Component } from '@angular/core';
import { url } from '../../url';
@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: "./tab-bar.component.html",
  styleUrl: './tab-bar.component.css'
})
  export class TabBarComponent {
    link = url[0];

    constructor() {
      // This line is not necessary; removing to avoid confusion
      // url = this.link;
    }

    close() {
      window.location.href = "about:blank";
    }

    loadUrl() {
      // Directly modifying the imported variable
      this.updateUrl(this.link);
    }

    updateUrl(newUrl: string) {
      url[0] = newUrl;
    }
  }
