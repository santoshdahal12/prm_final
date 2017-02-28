import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-advanceSearch',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']

})
export class AdvanceSearch implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  /* form submission from advance search form*/
  onSubmitSearch(newSearch:NgForm){
    console.log(newSearch.value);
    this.reRoute();

  }

  reRoute(){
    this.router.navigate(['/']);
  }


}
