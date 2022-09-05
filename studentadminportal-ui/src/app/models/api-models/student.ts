import { Address } from './address';
import { Gender } from './gender';
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  mobile: number;
  email: string;
  dateOfBirth: string;
  profilePictureUrl: string;
  genderId: string;
  gender: Gender;
  address: Address;
}
