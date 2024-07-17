import { Component } from '@angular/core';
import { UrlService } from '../url.service';
@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: "./tab-bar.component.html",
  styleUrl: './tab-bar.component.css'
})
  export class TabBarComponent {
    constructor(private urlService: UrlService) { }

    onUrlChange(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.urlService.changeUrl(inputElement.value);
    }
    close() {
      window.location.href = "about:blank";
    }
  }
