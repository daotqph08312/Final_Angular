import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { FormControl,FormGroup } from "@angular/forms";
import {School} from '../school';
import {SchollService} from '../scholl.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
   submitted = false;
  newSchool = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    president: new FormControl(''),
    province: new FormControl('')

  })
  id:Number = null;
  image:String = null;
  constructor( private route: Router,
                private activate : ActivatedRoute,
                private schoolService: SchollService,
                private formBuider:FormBuilder
                ) { }

  ngOnInit() {
    this.activate.paramMap.subscribe( params =>{
        let schoolsID = params.get('id');
        if(schoolsID != null){
          this.schoolService.getListSchoolbyId(schoolsID).subscribe(data =>{
              this.newSchool.setValue({
                name:data.name,
                logo:data.logo,
                address: data.address,
                president: data.president,
                province: data.province,
                id:schoolsID
              });
             this.id = schoolsID;
             this.showImage();
          })
        }
    });
    this.newSchool = this.formBuider.group({
      id: [null],
      name:['',Validators.required],
      logo:['',Validators.required],
      address: ['', Validators.required],
      president: ['', Validators.required],
      province: ['',Validators.required],
      // acceptTerms:[ true, Validators.requiredTrue]
    })
  }
    get f() { return this.newSchool.controls; }
  SaveSchool(){
    this.submitted = true;
    if(this.newSchool.invalid){
      return ;
    }

   if(this.newSchool.value.id != null){
      this.schoolService.updateSchool(this.newSchool.value).subscribe(data =>{
        console.log('update');
      this.route.navigate(['home/dashboard']);
    });
    }else{
  this.schoolService.addSchool(this.newSchool.value).subscribe(data =>{
      this.route.navigate(['home/dashboard']);
    });
    }

 
  
  }
    RemoveSchool(){
    this.schoolService.deleteSchool(this.id).subscribe(data =>{
    this.route.navigate(['home/dashboard']);
    });
  }
  showImage(){
         if(this.id != null){
            this.schoolService.getListSchoolbyId(this.id).subscribe(data =>{
             this.image = data.logo;
          })
         }
  }

}