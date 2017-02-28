import {Component, OnInit, ViewChild, Input} from '@angular/core';

import {NewContactService} from "../service/new-contact.service";
import {Modal} from "ng2-modal";
import {Contact} from "../contact";
import {Subscription} from "rxjs";
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";



@Component({
  moduleId: module.id,
  selector: 'app-newContact',
  templateUrl: 'newContact.component.html',
  styleUrls: ['newContact.component.css'],

})


export class NewContact implements OnInit{

  private subscription: Subscription

  /* see the changes in myModal in view*/

  contactForm: FormGroup;

  /* see the changes in myModal in view*/
  @ViewChild('myModal') myModal:Modal;
  @Input() contact= new Contact();


 constructor(private newContactService:NewContactService) {
 }

  ngOnInit() {
    this.contactForm = new FormGroup({

      'id': new FormControl(''),
      'firstName': new FormControl('', Validators.required),
      'middleName': new FormControl(''),
      'lastName': new FormControl('', Validators.required),
      'emails': new FormArray([
        new FormControl('example@email.com')
      ]),
      'phoneNumbers': new FormArray([
        new FormControl('(xxx)xxx-xxxx')
      ]),
      'socialNetworkingProfiles': new FormArray([
        new FormControl('linkedIn')
      ]),
      'addresses': new FormArray([this.initAddress()]),
      'company': new FormGroup({
        'name': new FormControl('', Validators.required),
        'department': new FormControl('', Validators.required),
        'title': new FormControl('', Validators.required),
      }),
    });

   /* the listner is new contact and its going to to open a contact modal form with the current contact passed to it*/

    this.subscription = this.newContactService.notifyObservable$.subscribe((contactToEdit) => {
    if (contactToEdit.hasOwnProperty('option') && contactToEdit.option === 'openContactModal') {
    console.log(contactToEdit.value);
    console.log(contactToEdit);

    // perform your other action from here
      /*this.openContactModal(res.value);*/

      /* reactive form */
      this.contactForm.controls['id'].setValue(contactToEdit.value.id);
      this.contactForm.controls['firstName'].setValue(contactToEdit.value.firstName);
      this.contactForm.controls['middleName'].setValue(contactToEdit.value.middleName);
      this.contactForm.controls['lastName'].setValue(contactToEdit.value.lastName);
      this.contactForm.controls['emails'].setValue(contactToEdit.value.emails);
      this.contactForm.controls['phoneNumbers'].setValue(contactToEdit.value.phoneNumbers);
      this.contactForm.controls['socialNetworkingProfiles'].setValue(contactToEdit.value.socialNetworkingProfiles);
      this.contactForm.controls['addresses'].setValue(contactToEdit.value.addresses);
      this.contactForm.controls['company'].setValue(contactToEdit.value.company);
    }
    });
    }

   ngOnDestroy() {
   this.subscription.unsubscribe();
   }


  /*a new contact from newAddress.component*/
  /* newContact  to service layer*/

  onSubmit(){
    this.contact=<Contact>this.contactForm.value;

    console.log('I m here');
    if(this.contact.id==null){
     this.contact.id=10;

    this.newContactService.addNewContact(this.contact).subscribe(data=>console.log(data));}


    else{
      this.newContactService.editContact(this.contact).subscribe(data=>console.log(data))
    }
    /*this.myModal.close()*/
    this.myModal.close();

  }

  openContactModal(contact){

    this.contact=contact;
    this.myModal.open(contact);
  }

  initAddress() {
    return new FormGroup({
      'addressLine1': new FormControl('', Validators.required),
      'addressLine2': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'zipCode': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required)
    });
  }


  addAddress() {
    const control = <FormArray>this.contactForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.contactForm.controls['addresses'];
    control.removeAt(i);
  }

  addEmail() {
    (<FormArray>this.contactForm.controls['emails']).push(new FormControl(
      'example@email.com', Validators.required));
  }

  removeEmail(i) {
    (<FormArray>this.contactForm.controls['emails']).removeAt(i);

  }

  addPhoneNumber() {
    (<FormArray>this.contactForm.controls['phoneNumbers']).push(new FormControl(
      '(xxx)xxx-xxxx', Validators.required));
  }

  removePhoneNumber(i) {
    (<FormArray>this.contactForm.controls['phoneNumbers']).removeAt(i);

  }

  addSocialNetworkingProfiles() {
    (<FormArray>this.contactForm.controls['socialNetworkingProfiles']).push(new FormControl(
      '', Validators.required));
  }

  removeSocialNetworkingProfiles(i) {
    (<FormArray>this.contactForm.controls['socialNetworkingProfiles']).removeAt(i);

  }





}
