import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  topics = ['Angular','React','Vue'];
  topicHasError = true; 
  submitted = false;
  errorMsg = '';
  userModel = new User('','dfdf2@.com',445555555,'default','morning',true);
  public students = [];

  constructor(private _enrollmentService: EnrollmentService, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  ngOnInit(){
    this._enrollmentService.getStudents()
      .subscribe(data => this.students = data);
      //.subscribe(data =>  console.log(data));
     
  }

  // for navigating updating view with data
  onSelect(students){
    this.router.navigate(['/updatestudent',students.name,students.email,students.phone,students.topic,students.timePreference,students.subscribe]);
    console.log(students);
    
  }
  
}
