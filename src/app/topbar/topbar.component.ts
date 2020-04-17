import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import {Router,ActivatedRoute} from "@angular/router"
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    nameUser: String = '';
  constructor(  private authService: AuthService,
                private route: Router,
                private translateService: TranslateService) { 
                     translateService.setDefaultLang('vn');
                }

  ngOnInit() {
    this.nameUser = localStorage.getItem('nameUser');
    console.log(this.nameUser);
  }
   signOut(): void {
  
    this.authService.signOut();
    this.route.navigate(['']);

  }
    switchLanguage(language: string) {
  this.translateService.use(language);
  this.route.navigate(['home/index']);
}
}