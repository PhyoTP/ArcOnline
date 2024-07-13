import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { url } from '../../url';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: `
  <div class="iframe-container">
    <iframe [src]="safeLink"></iframe>
  </div>
  `,
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  link: string = url[0];
  safeLink: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }
}
