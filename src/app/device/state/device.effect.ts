import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { mergeMap, map, catchError } from 'rxjs/operators';


import { IDevice } from '../Device';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDevice from './Device.actions';
import {DeviceService} from '@app/device/device.service';

@Injectable()
export class DeviceEffects {

  constructor(private deviceService: DeviceService, private actions$: Actions) {}

  @Effect()
  loadingDevices$: Observable<Action> = this.actions$.pipe(
    ofType(fromDevice.DeviceStateActionTypes.LoadDevices),
    mergeMap(action =>
      this.deviceService.getDevices().pipe(
        map(devices => (new fromDevice.LoadDevicesSuccessAction(devices))),
        // NOTE: This sets up the error handling ... but does not actually do anything with it.
        // Left to the viewer.
        catchError(err => of(new fromDevice.LoadDevicesFailAction(err.message)))
      )
    )
  );

  @Effect()
  updateDevice$: Observable<Action> = this.actions$.pipe(
    ofType(fromDevice.DeviceStateActionTypes.UpdateDevice),
    map((action: fromDevice.UpdateDeviceAction) => action.payload),
    mergeMap((device: IDevice) =>
      this.deviceService.saveDevice(device).pipe(
        map(updatedDevice => (new fromDevice.UpdateDeviceSuccessAction(updatedDevice))),
        // NOTE: This sets up the error handling ... but does not actually do anything with it.
        // Left to the viewer.
        catchError(err => of(new fromDevice.UpdateDeviceFailAction(err.message)))
      )
    )
  );
}
