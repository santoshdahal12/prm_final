export class Contact {

  constructor(id: number, firstName: string, middleName: string, lastName: string, isActive: boolean, customer: Customer,
              department: Department, title: ContactTitle, addresses: Address[], emailAddresses: EmailAddress[],
              socialAccounts: SocialAccount[], phoneNumbers: PhoneNumber[], state:string) {
    this.id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.isActive = isActive;
    this.customer = customer;
    this.department = department;
    this.title = title;
    this.addresses = addresses;
    this.emailAddresses = emailAddresses;
    this.socialAccounts = socialAccounts;
    this.phoneNumbers = phoneNumbers;
    this.state=state;//Lead or Prospect
  }

  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  isActive: boolean;
  customer: Customer;
  department: Department;
  title: ContactTitle;
  addresses: Address[];
  emailAddresses: EmailAddress[];
  socialAccounts: SocialAccount[];
  phoneNumbers: PhoneNumber[];
  state:string;
 /* state: ['LEAD',
    'PROSPECT'];*/
}


export class Address {
  constructor(id: number, addressLine1: string, addressLine2: string, city: string, zipCode: string, state: State) {
    this.id = id;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.zipCode = zipCode;
    this.state = state;
  }
  id: number;
  addressLine1: string;
  addressLine2: string;
  city: string;

  zipCode: string;
  state:State;

}

export class Customer {
  constructor(id: number, name: string, DUNSNumber: string) {
    this.id = id;
    this.name = name;
    this.DUNSNumber = DUNSNumber;

  }
  id: number;
  name: string;
  DUNSNumber:string;
  customerCode:string;

}


export class ContactTitle {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;

}


export class Department {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;

}

export class EmailAddress {
  constructor(id: number, isPrimary: boolean, emailAddress: string) {
    this.id = id;
    this.isPrimary = isPrimary;
    this.emailAddress = emailAddress;
  }

  id: number;
  isPrimary:boolean;
  emailAddress: string;

}

export class PhoneNumber {

  id: number;
  type:string;
  phoneNumber:string;

  constructor(id: number, type: string, phoneNumber: string) {
    this.id = id;
    this.type = type;
    this.phoneNumber = phoneNumber;
  }

}

export class SocialAccount {

  id: number;
  profileName: string;
  url:string;

  constructor(id: number, profileName: string,url:string) {
    this.id = id;
    this.profileName = profileName;
    this.url=url;
  }



}

export class State  {
  id: number;
  name: string;
  country:Country;

  constructor(id: number, name: string, country: Country) {
    this.id = id;
    this.name = name;
    this.country = country;
  }



}
export class Country {

  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }



}

