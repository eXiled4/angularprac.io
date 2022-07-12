import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-formz',
  templateUrl: './formz.component.html',
  styleUrls: ['./formz.component.css']
})
export class FormzComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.data$ = http.get("http://localhost:3000/customers")
    .pipe(tap(console.log), shareReplay()); // On ng serve, all data is viewable in the console through tap method!!!
  // this binds the data storage in data$ to retrieve all data from GET request
  // pipe method chained will attach another method to the GET request to print out all data from RESTful action
  // shareReplay method restricts to only one call made
   }

  firstName: string;
  email: string;
  password: string;

  data$: Observable<any>;
  // creating a data which will be a Observable property, the <any> will allow data to handle any type of data

  onSubmit(form: NgForm){
    this.http.post("http://localhost:3000/customers", form.value).subscribe();
    console.log(form.value)
  }

  deleteMe(){
    this.http.delete("http://localhost:3000/customers/1").subscribe();
    console.log("deleted")
  }

    // ALTERNATIVELY CAN BE WRITTEN AS BELOW
  // deleteMe(form: NgForm){
  //   this.http.delete("http://localhost:3000/customers/1", form.value).subscribe();
  //   console.log("delete me")
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }

ngOnInit(): void {
  this.data$.subscribe();
}
// Adding a subscription to data$


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

    // DELETE POST REQUEST
    //    similiar syntax see above


    // CACHING
      // Where browser stores a local copy/resources for retrieval later on
      // eg localStorage
      // Purpose to decrease server call
      // Caching with shreReplay method
      // shareReplay works with observable methods
      // Observable can have multiple subscribers
      // Caching with shareReplay returns an observable with one subcriber
      // Accepts buffersize as a parameter
      // SYNTAX - shareReplay(CACHE_SIZE)
// For caching, able to import directly to the file instead of importing module in parent app file
// 

// Import these two lines to start caching
// import { Observable } from 'rxjs';
// import { shareReplay, tap } from 'rxjs/operators';
// Next, insert
// data$: Observable<any>;
// creates a data property as an observable that takes in any data types
// Next, call inside the constructor 
