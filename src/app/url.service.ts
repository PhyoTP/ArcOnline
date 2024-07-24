import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { currentTab, makeURL } from '../url'
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlSource = new BehaviorSubject<string>(currentTab.links[0].url);
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  changeUrl(url: string) {
    currentTab.history.push(currentTab.links);
    this.urlSource.next(makeURL(url).url);
    currentTab.links = [makeURL(url)];
  }
}
