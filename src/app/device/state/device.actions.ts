import { IDevice } from '../device';

/* NgRx */
import { Action } from '@ngrx/store';

// (1) Start with the action
export enum DeviceStateActionTypes {
  ToggleDeviceCode = '[DeviceState] Toggle Device Code',
  ClearCurrentDevice = '[DeviceState] Clear Current Device',
  SetCurrentDevice = '[DeviceState] Set Current Device',
  LoadDevices = '[DeviceState] Load Devices',
  LoadDevicesSuccess = '[DeviceState] Load Devices Success',
  LoadDevicesFail = '[DeviceState] Load Devices Fail',
  UpdateDevice = '[DeviceState] Update Device',
  UpdateDeviceSuccess = '[DeviceState] Update Device Success',
  UpdateDeviceFail = '[DeviceState] Update Device Fail'
}

// Action Creators
export class ToggleDeviceCodeAction implements Action {
  readonly type = DeviceStateActionTypes.ToggleDeviceCode;

  constructor(public payload: boolean) {}
}

export class ClearCurrentDeviceAction implements Action {
  readonly type = DeviceStateActionTypes.ClearCurrentDevice;

  constructor() { }
}

export class SetCurrentDeviceAction implements Action {
  readonly type = DeviceStateActionTypes.SetCurrentDevice;

  constructor(public payload: IDevice) { }
}

export class LoadDevicesAction implements Action {
  readonly type = DeviceStateActionTypes.LoadDevices;

  constructor() { }
}

export class LoadDevicesSuccessAction implements Action {
  readonly type = DeviceStateActionTypes.LoadDevicesSuccess;

  constructor(public payload: IDevice[]) { }
}

export class LoadDevicesFailAction implements Action {
  readonly type = DeviceStateActionTypes.LoadDevicesFail;

  constructor(public payload: string) { }
}

export class UpdateDeviceAction implements Action {
  readonly type = DeviceStateActionTypes.UpdateDevice;

  constructor(public payload: IDevice) { }
}

export class UpdateDeviceSuccessAction implements Action {
  readonly type = DeviceStateActionTypes.UpdateDeviceSuccess;

  constructor(public payload: IDevice) { }
}

export class UpdateDeviceFailAction implements Action {
  readonly type = DeviceStateActionTypes.UpdateDeviceFail;

  constructor(public payload: string) { }
}

// Union all the valid types
export type DeviceStateAction = ToggleDeviceCodeAction
  | ClearCurrentDeviceAction
  | SetCurrentDeviceAction
  | LoadDevicesAction
  | LoadDevicesSuccessAction
  | LoadDevicesFailAction
  | UpdateDeviceAction
  | UpdateDeviceSuccessAction
  | UpdateDeviceFailAction;
