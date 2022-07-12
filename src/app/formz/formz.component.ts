import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-formz',
  templateUrl: './formz.component.html',
  styleUrls: ['./formz.component.css']
})
export class FormzComponent {

  firstName: string;
  email: string;
  password: string;

  onSubmit(form: NgForm) {
    console.log(form.value)
  }


  constructor() { }


}

// To create a form:

// First import form module from app module and to 'import' declaration in app
// Next, enter child module and import NgForm as seen in line two - accesses all features from NgForm

// Afterwards, declare all name:value pairs lines 11-13

// Create a function next that will handle the submit event in the export class function

// 