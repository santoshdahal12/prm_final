import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewContact } from './dashboard/newContact.component';
import { AdvanceSearch } from './dashboard/search.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './dashboard/contact-list.component';
import {NewContactService} from "./service/new-contact.service";
import {routing} from "./app.routing";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PaginationModule} from "ng2-pagination";
import {ModalModule} from "ng2-modal";
import { OptionsComponent } from './dashboard/options.component';
import { OrderByPipe } from './order-by.pipe';
import { AddressComponent } from './dashboard/address.component';
import { CompanyComponent } from './dashboard/company.component';


@NgModule({
  declarations: [
    AppComponent,
    NewContact,
    AdvanceSearch,
    HeaderComponent,
    ContactListComponent,
    PageNotFoundComponent,
    FooterComponent,

    OptionsComponent,

    OrderByPipe,

    AddressComponent,

    CompanyComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    ModalModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [NewContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
