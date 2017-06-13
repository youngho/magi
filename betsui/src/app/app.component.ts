import {Component, ViewContainerRef} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RoutesRecognized} from "@angular/router";


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'app works!';

  public constructor(router: Router) {
    router.events.subscribe(event => {
      //console.log(event);
      if (event instanceof NavigationEnd) {
        console.log("NavigationEnd");
        console.log(event);
        console.log(event.url);
        if (localStorage.getItem("loginId") == null) {
          router.navigate(['/auth/login']);
        }
      }
    });
  }

}
