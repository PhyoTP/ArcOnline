import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { SafePipe } from '../safe.pipe';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [SafePipe],
  template: `
  <div class="iframe-container">
    <iframe [src]="url | safe"></iframe>
  </div>
  `,
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit{
  url: string = '';

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.currentUrl.subscribe(url => this.url = url);
  }
}
