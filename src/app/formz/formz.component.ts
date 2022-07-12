import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formz',
  templateUrl: './formz.component.html',
  styleUrls: ['./formz.component.css']
})
export class FormzComponent {

  constructor(private http:HttpClient) { }

  firstName: string;
  email: string;
  password: string;

  onSubmit(form: NgForm){
    this.http.post("http://localhost:3000/customers", form.value).subscribe();
    console.log(form.value)
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }


  


}

// To create a form:

// First import form module from app module and to 'import' declaration in app
// Next, enter child module and import NgForm as seen in line two - accesses all features from NgForm

// Afterwards, declare all name:value pairs lines 11-13

// Create a function next that will handle the submit event in the export class function

// 

// To create requests to API
// Import HttpClientModule as seen in app module ts
// Then use this syntax to use features of HttpClientModule
//    import { HttpClient } from '@angular/common/http';
// In constructor, this is where we begin our code to make RESTful requests
// by assigning http to HttpClient, calls can be made to APIs
// In the onSubmit function, this is where the methods for request is created
    // First, declare the http as declared in contructor - where it inherited RESTful features from HttpClientModule
    //    this.http
    // next, append the RESTful action (in above eg, POST used)
    //    this.http.post
    // this line so far will take two arguments - first the api location, second, what is being passed into the request
    // this.http.post("http://localhost:3000/customers", form.value)
    // MUST CHAIN the subscribe() method at end of this syntax or wont work
    // subscribe() function defines how to obtain or generate values or messages to be published