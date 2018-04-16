import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-presenter',
  templateUrl: './module-presenter.component.html',
  styleUrls: ['./module-presenter.component.scss']
})
export class ModulePresenterComponent implements OnInit {
  sideNavOpened = true;

  @Input() title: string;
  @Input() entity: any[];
  @Input() entityName: string;
  @Input() defaultSidebar = true;
  @Input() defaultContent = true;
  @Input() sideBarTitle: string;
  @Input() sideBarEntity: string;
  @Input() showSidebar = true;

  get sideBarVisibilityIconName(): string {
    return this.sideNavOpened ? 'arrow_back' : 'arrow_forward';
  }

  constructor(private _router: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = this._router.data['value']['title'];
    this.entityName = this._router.data['value']['entityName'];
    if (!this.sideBarTitle) {
      this.sideBarTitle = this.entityName + ' Groups';
    }
  }
}
