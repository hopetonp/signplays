import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '@app/core/animations';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }

})
export class DeviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
