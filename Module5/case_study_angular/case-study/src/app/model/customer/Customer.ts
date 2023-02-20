import {CustomerType} from "./Customer-type";


export interface Customer {
  id?: number;
  customerName?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  customerType?: CustomerType;
  address?: string;
}
