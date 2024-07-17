import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlSource = new BehaviorSubject<string>('https://arc.net');
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  changeUrl(url: string) {
    this.urlSource.next(url);
  }
}
