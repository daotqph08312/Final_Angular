import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('vn');
  }

}
