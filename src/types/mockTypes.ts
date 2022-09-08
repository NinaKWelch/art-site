import { Portfolio } from './mockInterfaces'

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nameUrl?: string;
  portfolio?: Portfolio[];
}

export type Credentials = {
  email: string;
  password: string;
}