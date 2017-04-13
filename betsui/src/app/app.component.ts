import {Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['element.style {visibility: hidden;}'],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  public title = 'app works!';

  public constructor(private viewContainerRef: ViewContainerRef) {}

}
