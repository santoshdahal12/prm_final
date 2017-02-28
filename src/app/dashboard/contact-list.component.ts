import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Contact} from "../contact";
import {NewContactService} from "../service/new-contact.service";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],

})
export class ContactListComponent implements OnInit {



  constructor(private contactService:NewContactService) {


  }
  contacts:Contact[];

  ngOnInit() {

    ///pending
    /*this.contactService.getContacts().subscribe((contactList:Contact[])=>this.contacts=contactList) ;*/

  }

  /*  notifies the listner to open the contact modal form*/
  /* here the listner is newComponent and both of these are observed in a shared service :NewContactService*/
  openContactModal(contact){
   this.contactService.notifyOther({option: 'openContactModal', value: contact});
  }

 /* /!* calls service to delete record*!/


  deleteContact(contact){

    this.contactService.deleteContact(contact);
  }
*/

}
