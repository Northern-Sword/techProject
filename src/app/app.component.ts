import { Component } from '@angular/core';
import {DurationService} from "./duration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techProject';

  time = this.duration.getTime();

  constructor(private duration: DurationService) {
  }
}
