import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { goBack, goForward, currentTab, pinnedTabs, tabs } from '../../url';
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
    this.urlInput.nativeElement.value = currentTab.links[0].website;
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
  }
  forward() {
    goForward(currentTab);
  }
}
