import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-presenter-header',
  templateUrl: './module-presenter-header.component.html',
  styleUrls: ['./module-presenter-header.component.scss']
})
export class ModulePresenterHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() entityName = 'EntityName';

  constructor() { }
  ngOnInit() {
  }

}
