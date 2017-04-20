import {Component, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'app works!';

  public constructor(router:Router,private viewContainerRef: ViewContainerRef) {
    router.events.subscribe(e => {
      if(e.url !== '/auth/login') {
        // if(!loginService.isAuthenticated()) {
        console.log("localStorage.getItem('loginID') : " + localStorage.getItem("loginID"));
        if(localStorage.getItem("loginId") == null) {
          router.navigate(['/auth/login']);
        } else {
          // loginService.sendLoginSuccess();
          console.log("sendLoginSuccess");
        }
      }
    });
  }

}
