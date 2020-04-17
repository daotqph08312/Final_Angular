import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {Class } from "../class";
import {ClassService} from "../class.service";
import {SchollService} from "../scholl.service";
@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {
  schoolID:Number= 0;
  nameSchool:String = '';
   classes = new Class();
  constructor(
    private route : Router,
    private activate: ActivatedRoute,
    private classService: ClassService,
    private schoolService:SchollService
  ) { }
 
  ngOnInit(
  ) {
  this.activate.paramMap.subscribe(data =>{
     this.schoolID = parseInt(data.get('id'));
      this.classService.getlistClass(this.schoolID).subscribe(data =>{
        // console.log(data);
        this.classes = data;
        console.log(this.classes)
        
      });
  });
  this.schoolService.getListSchoolbyId(this.schoolID).subscribe(data =>{
          this.nameSchool = data.name;
  });
  // console.log(this.Classes)
  }

}