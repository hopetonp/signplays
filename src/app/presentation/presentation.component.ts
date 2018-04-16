import {Component, OnInit, ViewChild} from '@angular/core';
import {productData} from '@app/presentation/datasource';
import {GridComponent, EditService, FilterType, FilterService} from '@syncfusion/ej2-ng-grids';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  providers: [EditService, FilterService]
})
export class PresentationComponent implements OnInit {

  @ViewChild('grid')
  public grid: GridComponent;

  productNameRules = { required: true };
  public filterSettings: Object;
  constructor() { }

  public data: Object[];
  public pageSettings: Object;
  editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };

  commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];


  ngOnInit(): void {
    this.data = productData;
    this.pageSettings = { pageCount: 5, pageSize: 17 };
    this.grid.filterSettings.type = 'Excel';
  }

}
