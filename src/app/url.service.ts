import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { currentTab, checkURL } from '../url'
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlSource = new BehaviorSubject<string>(currentTab.links[0].url);
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  changeUrl(url: string) {
    this.urlSource.next(checkURL(url).url);
    currentTab.links[0].url = url;
  }
}
