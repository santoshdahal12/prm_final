import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
   public showAdvanceSearchForm=false;

  /* to show the advance search form*/
  showAdvanceSearch(){
    this.showAdvanceSearchForm=true;
  }
}
