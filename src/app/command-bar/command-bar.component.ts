import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UrlService } from '../url.service';
import { CommandBarService } from '../command-bar.service';
@Component({
  selector: 'app-command-bar',
  standalone: true,
  imports: [],
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent implements AfterViewInit{
  constructor(
    private urlService: UrlService,
    private commandBarService: CommandBarService
  ) {}

  currentStatus: boolean = false;

  ngOnInit(): void {
    this.commandBarService.currentStatus.subscribe(
      // update the component's property
      status => this.currentStatus = status
    );
  }
  @ViewChild('urlInput') urlInput!: ElementRef;
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
