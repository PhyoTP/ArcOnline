import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { UrlService } from './url.service';
import { SafePipe } from './safe.pipe';  // Import the SafePipe

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabBarComponent,
    SafePipe  // Declare the SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
