import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { goBack, goForward, currentTab, bookmarks, pinnedTabs, tabs, makeTab } from '../../url';
@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: "./tab-bar.component.html",
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent implements AfterViewInit{
  @ViewChild('urlInput') urlInput!: ElementRef;
  constructor(private urlService: UrlService) { }
  
  ngAfterViewInit() {
    this.urlService.currentUrl.subscribe(url => {
      if (this.urlInput) {
        this.urlInput.nativeElement.value = makeTab([url]).titles[0];
      }
    });
  }
  onUrlChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.urlService.changeUrl(inputElement.value);
  }
  close() {
    window.location.href = "https://github.com/PhyoTP/ArcOnline";
  }
  back() {
    goBack(currentTab);
    console.log("back");
    this.urlService.changeUrl(this.urlInput.nativeElement.value);
  }
  forward() {
    goForward(currentTab);
    console.log("forward");
    this.urlService.changeUrl(this.urlInput.nativeElement.value);
  }
}
