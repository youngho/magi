import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'lasttable',
  templateUrl: './lasttable.component.html',
})
export class LastTableComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
