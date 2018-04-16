import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/shared/material.module';
import {SearchComponent} from '@app/shared/search/search.component';
import {SearchService} from '@app/shared/search/search.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    SearchComponent
  ],
  exports: [
    LoaderComponent,
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SharedModule { }
