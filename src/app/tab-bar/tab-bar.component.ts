import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { makeTab, commandBarIsActive } from '../../url';
@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: "./tab-bar.component.html",
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent implements AfterViewInit{
  @ViewChild('addressBar') addressBar!: ElementRef;
  constructor(private urlService: UrlService) { };
  ngAfterViewInit() {
    this.urlService.currentUrl.subscribe(url => {
      if (this.addressBar) {
        this.addressBar.nativeElement.innerHTML = makeTab([url]).titles[0];
      }
    });
  }
  close() {
    window.location.href = "https://github.com/PhyoTP/ArcOnline";
  }
  openCommandBar() {
    if (!commandBarIsActive[0]) {
      commandBarIsActive[0] = true
    }
  }
}
