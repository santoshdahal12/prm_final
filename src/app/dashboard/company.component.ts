import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company',
  templateUrl: 'company.component.html',
  styleUrls: ['company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input()contactForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
