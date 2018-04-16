import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { catchError, tap, map } from 'rxjs/operators';

import { IDevice } from './device';

@Injectable()
export class DeviceService {
  private devicesUrl = 'api/devices';
  private devices: IDevice[];

  constructor(private http: HttpClient) { }

  getDevices(): Observable<IDevice[]> {
    if (this.devices) {
      return of(this.devices);
    }
    return this.http.get<IDevice[]>(this.devicesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.devices = data),
        catchError(this.handleError)
      );
  }

  // Return an initialized device
  newDevice(): IDevice {
    return this.initializeDevice();
  }

  saveDevice(device: IDevice): Observable<IDevice> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (device.id === 0) {
      return this.createDevice(device, headers);
    }
    return this.updateDevice(device, headers);
  }

  deleteDevice(id: number): Observable<IDevice> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.devicesUrl}/${id}`;
    return this.http.delete<IDevice>(url, { headers: headers} )
      .pipe(
        tap(data => console.log('deleteDevice: ' + id)),
        tap(data => {
          const foundIndex = this.devices.findIndex(item => item.id === id);
          if (foundIndex > -1) {
            this.devices.splice(foundIndex, 1);
          }
        }),
        catchError(this.handleError)
      );
  }

  private createDevice(device: IDevice, headers: HttpHeaders): Observable<IDevice> {
    device.id = null;
    return this.http.post<IDevice>(this.devicesUrl, device,  { headers: headers} )
      .pipe(
        tap(data => console.log('createDevice: ' + JSON.stringify(data))),
        tap(data => {
          this.devices.push(data);
        }),
        catchError(this.handleError)
      );
  }

  private updateDevice(device: IDevice, headers: HttpHeaders): Observable<IDevice> {
    const url = `${this.devicesUrl}/${device.id}`;
    return this.http.put<IDevice>(url, device, { headers: headers} )
      .pipe(
        tap(() => console.log('updateDevice: ' + device.id)),
        // Update the item in the list
        // This is required because the selected device that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.devices.findIndex(item => item.id === device.id);
          if (foundIndex > -1) {
            this.devices[foundIndex] = device;
          }
        }),
        // Return the device on an update
        map(() => device),
        catchError(this.handleError)
      );
  }

  private initializeDevice(): IDevice {
    // Return an initialized object
    return {
    id: 0,
    groupId: 1,
    deviceName: '',
    tags: [],
    description: '',
    macAddress: '',
    ipAddress: '',
    serialNumber: '',
    creationDate: new Date(),
    lastModified: new Date(),
    createdBy: '',
    modifiedBy: '',
    isActive: true,
    };
  }

  private handleError(err: HttpErrorResponse): ErrorObservable {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return new ErrorObservable(errorMessage);
  }

}
