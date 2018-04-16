import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import {SearchService} from '@app/shared/search/search.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  templateUrl: './search.component.html',
  selector: 'app-search',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {
  @Input() searchDelay = 750;
  @Input() syncService = false;
  private _timer: any;
  private _value = '';
  private _valueChangeSubscription: Subscription;

  @Input() placeholder = 'Search';
  @Input() get value(): string {
    return this._value;
  }
  set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      this.scheduleSearchUpdate();
    }
  }

  @Output()
  valueChange = new EventEmitter<string>();

  constructor(private searchService: SearchService) {
  }
  ngOnInit() {
     this._valueChangeSubscription = this.searchService.valueChange$.subscribe((searchValue: any) => {
        if (this.syncService) {
            this.value = searchValue;
        }
     });
  }

  private scheduleSearchUpdate() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
       this.valueChange.emit(this.value);
       if (this.syncService) {
          this.searchService.value = this.value;
       }
    }, this.searchDelay);
  }

  ngOnDestroy(): void {
    clearTimeout(this._timer);
    this._valueChangeSubscription.unsubscribe();
  }

}
