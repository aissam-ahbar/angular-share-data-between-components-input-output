import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
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
