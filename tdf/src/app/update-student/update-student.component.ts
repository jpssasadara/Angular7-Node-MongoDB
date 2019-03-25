import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
//import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  topics = ['Angular','React','Vue'];
  topicHasError = true; 
  submitted = false;
  errorMsg = '';

  public name;
  public email;
  public phone;
  public interested;
  public time;
  public promotional;

  public status: boolean = false;

  public userModel ; 

  public students = []; 
  constructor(private _enrollmentService: EnrollmentService, private router: ActivatedRoute, private routerss: Router) { }
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
  ngOnInit() {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.name = params.get('id1');
      this.email = params.get('id2');
      this.phone = params.get('id3');
      this.interested = params.get('id4');
      this.time = params.get('id5');
      this.promotional =params.get('id6');
      this.status = (params.get('id7')== "true");
      
      this.userModel = new User(this.name,this.email,this.phone,this.interested,this.time,this.promotional);
    })
    
  }

  close(){
    this.status= false;
    this.routerss.navigate(['/updatestudent',this.name,this.email,this.phone,this.interested,this.time,this.promotional,'false']);
  }

}
