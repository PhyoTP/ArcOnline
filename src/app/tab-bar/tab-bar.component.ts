import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { makeTab } from '../../url';
import { CommandBarService } from '../command-bar.service';
@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [],
  templateUrl: "./tab-bar.component.html",
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent implements AfterViewInit{
  @ViewChild('addressBar') addressBar!: ElementRef;
  constructor(
    private urlService: UrlService,
    private commandBarService: CommandBarService
  ) {}
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

  status: boolean = true;

  openCommandBar(){    
   this.commandBarService.updateStatus(this.status);
    console.log(this.commandBarService.currentStatus)
  }
}
