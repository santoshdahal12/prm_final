
/* routes in the application*/
import { ContactListComponent } from './dashboard/contact-list.component';
import { NewContact } from './dashboard/newContact.component';
import {Route, Routes, RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const APP_ROUTES: Routes=[
  {
    path:'', component:ContactListComponent
  },
  {
    path:'newContact', component:NewContact
  },
  { path: '**', component: PageNotFoundComponent }
];
export  const routing= RouterModule.forRoot(APP_ROUTES);
