# angular Share Data between components

## Overview

```html
<!--
          -------------------------
APP       |                       -
-----------   COUNTER (+1) = 2    --- OUTPUT = 1
INPUT = 0 |                       -
          -------------------------
-->
```

## Input & Ouput (Child Counter)

```ts
# counter.component.ts
export class CounterComponent implements OnInit {
  @Input() count: number = -1;
  @Output() newCountEvent = new EventEmitter<number>();

  // We increment the counter on init
  ngOnInit() {
    this.increment();
    this.newCountEvent.emit(this.count);
  }

  increment() {
    this.count++;
  }
}
```

## Initial and listen to output events (App)

```ts
# app.component.ts
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
```
