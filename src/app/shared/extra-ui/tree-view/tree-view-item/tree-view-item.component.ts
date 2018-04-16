import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree-view-item',
  templateUrl: './tree-view-item.component.html',
  styleUrls: ['./tree-view-item.component.scss']
})
export class TreeViewItemComponent implements OnInit {

  @Input() isExpandable = false;
  @Input() item: any;
  constructor() { }

  @Input() headerText: string;
  ngOnInit() {
  }

}
