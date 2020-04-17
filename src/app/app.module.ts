import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchollService } from './scholl.service';
import { ClassService } from './class.service';
import { ClassComponentComponent } from './class-component/class-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { UserService } from './user.service';
import { ClassFormComponent } from './class-form/class-form.component';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';

import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'


const config = new AuthServiceConfig([
   {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1045280647911-nh3smq3e2lilcs4aeccn8ojrctbggo41.apps.googleusercontent.com')
  },
]);
const layout = [
  {path: 'home', component:DashboardComponent
  , children: [
     {path:'dashboard', component:SchoolComponentComponent},
      {path: 'editSchool/:id', component:SchoolFormComponent},
      {path: 'addSchool', component:SchoolFormComponent}, 
      {path: 'deleteSchool/:id', component:SchoolComponentComponent}, 
      {path: 'index', component:IndexComponent}, 
      {path: 'class/:id', component: ClassComponentComponent},
      {path: 'addClass', component:  ClassFormComponent},
      {path: 'editClass/:idschool/:idclass', component:  ClassFormComponent}
  ]
  },
  {path: '', component:LoginComponent}
  
]
export function provideConfig() {
  return config;
}
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports:      [ BrowserModule, FormsModule ,FontAwesomeModule,SocialLoginModule,ReactiveFormsModule,
   RouterModule.forRoot(layout),
    HttpClientModule,
  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  
  declarations: [ AppComponent, HelloComponent,  ClassComponentComponent, SchoolComponentComponent, DashboardComponent, SchoolFormComponent, HeaderComponent, FooterComponent, TopbarComponent, LoginComponent, IndexComponent, ClassFormComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [SchollService, ClassService, UserService,
  {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
   ]
})
export class AppModule { }
