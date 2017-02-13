import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { correctHeight, detectBody } from './app.helpers';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');

    this.translate.use('en');

    console.log('posts of lang:' + this.translate.instant('posts'));
    console.log('posts nonexist of lang:' + this.translate.instant('posts-nonexist'));
  }

  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind("load resize", function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });
  }

}
