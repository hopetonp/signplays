import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-presenter-sidebar',
  templateUrl: './module-presenter-sidebar.component.html',
  styleUrls: ['./module-presenter-sidebar.component.scss']
})
export class ModulePresenterSidebarComponent implements OnInit {
  @Input() defaultContent = true;
  @Input() entity: any[];
  @Input() title: string;

  public hierarchicalData: Object[] = [
    { id: '01', name: 'Music',
      children: [
        {id: '01-01', name: 'Gouttes.mp3'},
      ]
    },
    {
      id: '02', name: 'Videos',
      children: [
        {id: '02-01', name: 'Naturals.mp4'},
        {id: '02-02', name: 'Wild.mpeg'}
      ]
    },
    {
      id: '03', name: 'Documents',
      children: [
        {id: '03-01', name: 'Environment Pollution.docx'},
        {id: '03-02', name: 'Global Water, Sanitation'},
        {id: '03-03', name: 'Global Warming.ppt'},
        {id: '03-02', name: 'Social Network.pdf'},
        {id: '03-03', name: 'Youth Empowerment.pdf'},
      ]
    }
  ];

  public field: Object = { dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'children' };



  constructor() { }

  ngOnInit() {
  }

}
