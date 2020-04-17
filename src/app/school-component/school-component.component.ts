import { Component, OnInit } from '@angular/core';
import {SchollService} from '../scholl.service';
import {School} from '../school';
import {Router,ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-school-component',
  templateUrl: './school-component.component.html',
  styleUrls: ['./school-component.component.css']
})
export class SchoolComponentComponent implements OnInit {
  school = new School();
  constructor( private schoolService : SchollService,
                private route: Router,
                private activateRoute: ActivatedRoute
                ) { }

  ngOnInit() {
    this.schoolService.getListSchools().subscribe( data =>{
      console.log(data);
      this.school = data;
    });
  }


}