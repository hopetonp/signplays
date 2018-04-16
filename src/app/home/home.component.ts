import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import {routerTransition} from '@app/core/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition]
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean
  quickItems = [
    {caption: 'Menu Board', icon: 'quick-menu.jpg'},
    {caption: 'Slideshow', icon: 'quick-slideshow.png'},
    {caption: 'Promotion', icon: 'quick-promotion.png'},
    {caption: 'Cinema', icon: 'quick-cinema.jpg'},
    {caption: 'Corporate Communications', icon: 'quick-corpcomm.png'}
  ]

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

}
