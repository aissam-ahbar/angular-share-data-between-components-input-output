import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value: number = 0;
  newValue: number = 0;

  public handleNewCountEvent($event: number) {
    if ($event) this.newValue = $event;
  }
}
