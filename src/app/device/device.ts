export interface IDevice {
  id: number | null;
  groupId: number;
  deviceName: string;
  tags?: string[];
  description: string;
  macAddress: string;
  ipAddress: string;
  serialNumber: string;
  creationDate: Date;
  lastModified: Date;
  createdBy: string;
  modifiedBy: string;
  isActive: boolean;
}
