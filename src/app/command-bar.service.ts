
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandBarService {

  constructor() {}

  status = new BehaviorSubject(false);

  // expose the BehaviorSubject as an Observable
  currentStatus = this.status.asObservable();

  // function to update the value of the BehaviorSubject
  updateStatus(newStatus: boolean){
    this.status.next(newStatus);
  }
}