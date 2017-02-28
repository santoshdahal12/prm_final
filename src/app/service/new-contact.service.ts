import { Injectable } from '@angular/core';

import {Contact} from "../contact";
import {Contacts} from "../mock-Contacts";
import {Subject} from "rxjs";
import {Http, Headers, Response} from "@angular/http";


@Injectable()
export class NewContactService {

  /* block to create observable to which contactlist and new contact will be  susbscribed */

  /********************************************************************/

  private notify = new Subject<any>();


  /*
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();

  constructor(private http:Http){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }


/***************************************************************/

/* get contacts from mock or */
/*get contacts from backend server */

  getContacts(){
    return this.http.get("https://csmmockdatabase.firebaseio.com/data/-Kdm3-8XzHNvW8h4ntKz/contacts.json")
      .map(response => <Contact[]>response.json());
  }


  /* adds new Contact from dashboard component*/

  addNewContact(contact:Contact){

    console.log(contact);

    /*this.getContacts().push(contact);*/
    const body=JSON.stringify(contact);
    const headers=new Headers;
    headers.append('Content_Type','application/json');

    return this.http.put('https://csmmockdatabase.firebaseio.com/contact.json',body,{headers:headers})
      .map((data:Response)=>data.json());



  }
  editContact(contact:Contact){
    const body=JSON.stringify(contact);
    const headers=new Headers;
    headers.append('Content_Type','application/json');
    return this.http.put('https://csmmockdatabase.firebaseio.com/data/-Kdm3-8XzHNvW8h4ntKz/contacts.json',body,{headers:headers})
      .map((data:Response)=>data.json());

  }
  /* deletes contact */
  /* just for front end*/
  /* for backend , can pass this object to backend for delete*/
  /*deleteContact(contact){
    var index=this.getContacts().indexOf(contact);
    if (index != -1) {
      this.getContacts().splice(index,1);
    }
  }*/

}
