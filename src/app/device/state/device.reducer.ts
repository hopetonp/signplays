import { IDevice } from '../device';

/* NgRx */
import * as fromDevice from './device.actions';

// State for this feature (Device)
export interface State {
  Device: DeviceState;
}

// Slice of the feature state
export interface DeviceState {
  showDeviceCode: boolean;
  currentDevice: IDevice;
  Devices: IDevice[];
}

export const initialState: DeviceState = {
  showDeviceCode: false,
  currentDevice: null,
  Devices: []
};

// Change to the appropriate action
export function reducer(state: DeviceState = initialState, action: fromDevice.DeviceStateAction): DeviceState {

  switch (action.type) {
    case fromDevice.DeviceStateActionTypes.ToggleDeviceCode: {
      return { ...state, showDeviceCode: action.payload };
    }

    case fromDevice.DeviceStateActionTypes.ClearCurrentDevice: {
      return {...state, currentDevice: null};
    }

    case fromDevice.DeviceStateActionTypes.SetCurrentDevice: {
      return {...state, currentDevice: action.payload};
    }

    case fromDevice.DeviceStateActionTypes.LoadDevicesSuccess: {
      return { ...state, Devices: action.payload };
    }

    case fromDevice.DeviceStateActionTypes.UpdateDeviceSuccess: {
      // const newDevices = state.Devices.map(item => {
      // if (action.payload.id !== item.id) {
      //   // This isn't the item we care about - keep it as-is
      //   return item;
      // }
      // // Otherwise, this is the one we want - return an updated value
      // return action.payload;
      const newDevices = state.Devices.map(
        item => action.payload.id === item.id ? action.payload : item);
      return { ...state, currentDevice: action.payload, Devices: newDevices };
    }

    default: {
      return state;
    }
  }
}
