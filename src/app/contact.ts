

export class Contact {

  /*id:number;
  firstName: string;
  middleName: string;
  lastName: string;
  companyName: string;
  department: string;
  title: string;
  email: string;

  /!*emails:string[];*!/
  phoneNumber: string;
  socialNetworkingProfiles:string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;*/
  id:number;
  firstName: string;
  middleName:string;
  lastName:string;
  addresses: Address[];
  emails: string[];
  socialNetworkingProfiles:string[];
  phoneNumbers:string[];
  company:Company;
}

export interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Company {
  name: string;
  department:string;
  title:string;

}

