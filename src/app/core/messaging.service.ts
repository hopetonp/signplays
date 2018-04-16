import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export interface IMessage {
  channel: string;
  data: any;
}

@Injectable()
export class MessagingService {
  private _message: Subject<IMessage>
  constructor() {
    this._message = new Subject<IMessage>();
  }

  publish<T>(message: T): void {
    const channel = (<any> message.constructor).name;
    this._message.next({channel: channel, data: message});
  }
  of<T>(messageType: {new(...args: any[]): T}): Observable<T> {
    const channel = (<any>messageType).name;
    return this._message.filter(m => m.channel === channel).map(m => m.data);
  }
}
