import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { commandBarIsActive } from '../../url';
@Component({
  selector: 'app-command-bar',
  standalone: true,
  imports: [],
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent implements AfterViewInit{
  isActive = commandBarIsActive;
  @ViewChild('urlInput') urlInput!: ElementRef;
  constructor(private urlService: UrlService) { };
  ngAfterViewInit() {
    this.urlService.currentUrl.subscribe(url => {
      if (this.urlInput) {
        this.urlInput.nativeElement.value = url;
      }
    });
  }
  onUrlChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.urlService.changeUrl(inputElement.value);
  }
}
