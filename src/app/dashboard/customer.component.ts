import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css']
})
export class CompanyComponent implements OnInit {
  @Input()contactForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
