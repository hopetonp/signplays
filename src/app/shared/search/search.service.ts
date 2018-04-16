import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {
  private valueChangeSubject = new Subject<string>();
  valueChange$ = this.valueChangeSubject.asObservable();

  private _value = '';
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      this.valueChangeSubject.next(value);
    }
  }
  constructor() { }

}
