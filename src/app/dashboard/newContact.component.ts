import {Component, OnInit, ViewChild, Input} from '@angular/core';

import {NewContactService} from "../service/new-contact.service";
import {Modal} from "ng2-modal";
import {Contact, EmailAddress} from "../contact";
import {Subscription} from "rxjs";
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";


@Component({
  moduleId: module.id,
  selector: 'app-newContact',
  templateUrl: 'newContact.component.html',
  styleUrls: ['newContact.component.css'],

})


export class NewContact implements OnInit {

  private subscription: Subscription

  /* see the changes in myModal in view*/

  contactForm: FormGroup;

  /* see the changes in myModal in view*/
  @ViewChild('myModal') myModal: Modal;
  @Input() contact = new Contact(null,null,null,null,true, null,
  null, null, null, null,  null, null, null  );

  @Input()
  types: any = ['MOBILE', 'HOME'];

  constructor(private newContactService: NewContactService) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({

      'id': new FormControl(''),
      'firstName': new FormControl('', Validators.required),
      'middleName': new FormControl(''),
      'lastName': new FormControl('', Validators.required),


      'emailAddresses': new FormArray([this.initEmail()]),


      'phoneNumbers': new FormArray([
        this.initPhoneNumber()
      ]),

      'socialAccounts': new FormArray([
        this.initSocialAccounts()
      ]),
      'addresses': new FormArray([this.initAddress()]),
      'customer': new FormGroup({
        'id': new FormControl(''),
        'name': new FormControl('', Validators.required),
        'DUNSNumber': new FormControl(''),
      }),
      'title': new FormGroup({
        'id': new FormControl(''),
        'name': new FormControl('', Validators.required),
      }),
      'department': new FormGroup({
        'id': new FormControl(''),
        'name': new FormControl('', Validators.required),
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
        this.contactForm.controls['emailAddresses'].setValue(contactToEdit.value.emailAddresses);
        this.contactForm.controls['phoneNumbers'].setValue(contactToEdit.value.phoneNumbers);
        this.contactForm.controls['socialAccounts'].setValue(contactToEdit.value.socialAccounts);
        this.contactForm.controls['addresses'].setValue(contactToEdit.value.addresses);
        this.contactForm.controls['customer'].setValue(contactToEdit.value.customer);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  /*a new contact from newAddress.component*/
  /* newContact  to service layer*/

  onSubmit() {
    this.contact=<Contact>this.contactForm.value;
    this.contact.isActive=false;
    this.contact.state='LEAD';
    this.contact.customer.customerCode=null;


    console.log('I m here');


     console.log(JSON.stringify(this.contactForm.value));

   /* console.log(this.contactForm.value.json());*/


    this.newContactService.addNewContact(this.contactForm.value).subscribe(
      data=>console.log(data),
      error=>console.log(error)

      /*
       this.router.navigate(['/path_to_login_page']);
       return error.status;
      * */
    );


    /* else{*/
    /*  this.newContactService.editContact(this.contact).subscribe(data=>console.log(data))*/
    /*}*/
    /*this.myModal.close()*/
    /*this.contactForm.reset();*/
    this.myModal.close();

  }

  openContactModal(contact) {

    this.contact = contact;

    this.myModal.open();
  }

  initAddress() {
    return new FormGroup({
      'id': new FormControl(''),
      'addressLine1': new FormControl('', Validators.required),
      'addressLine2': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'zipCode': new FormControl('', Validators.required),
      'state': new FormGroup({
        'id': new FormControl(''),
        'name': new FormControl('', Validators.required),
        'country': new FormGroup({
          'id': new FormControl(''),
          'name': new FormControl('', Validators.required)
        })
      }),

    });
  }

  initEmail() {
    return new FormGroup({
      'id': new FormControl(''),
      'emailAddress': new FormControl('', Validators.required),

    });
  }

  initSocialAccounts() {
    return new FormGroup({
      'id': new FormControl(''),
      'profileName': new FormControl('', Validators.required),
      'url': new FormControl('', Validators.required),

    });
  }

  initPhoneNumber() {
    return new FormGroup({
      'id': new FormControl(''),
      'phoneNumber': new FormControl('(xxx)xxxxxxx'),
      'phoneType': new FormControl('MOBILE'),
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
    /*(<FormArray>this.contactForm.controls['emailAddresses']).push(new FormControl(
     'example@email.com', Validators.required));*/
    const control = <FormArray>this.contactForm.controls['emailAddresses'];
    control.push(this.initEmail());
  }

  removeEmail(i) {
    /*(<FormArray>this.contactForm.controls['emailAddresses']).removeAt(i);*/

    const control = <FormArray>this.contactForm.controls['emailAddresses'];
    control.removeAt(i);

  }

  addPhoneNumber() {
    /*(<FormArray>this.contactForm.controls['phoneNumbers']).push(new FormControl(
     '(xxx)xxx-xxxx', Validators.required));*/
    const control = <FormArray>this.contactForm.controls['phoneNumbers'];
    control.push(this.initPhoneNumber());
  }

  removePhoneNumber(i) {
    /*(<FormArray>this.contactForm.controls['phoneNumbers']).removeAt(i);*/
    const control = <FormArray>this.contactForm.controls['phoneNumbers'];
    control.removeAt(i);

  }

  addSocialNetworkingProfiles() {
    /* (<FormArray>this.contactForm.controls['socialAccounts']).push(new FormControl(
     '', Validators.required));*/
    const control = <FormArray>this.contactForm.controls['socialAccounts'];
    control.push(this.initSocialAccounts());
  }

  removeSocialNetworkingProfiles(i) {
    /* (<FormArray>this.contactForm.controls['socialAccounts']).removeAt(i);*/
    const control = <FormArray>this.contactForm.controls['socialAccounts'];
    control.removeAt(i);

  }


}
