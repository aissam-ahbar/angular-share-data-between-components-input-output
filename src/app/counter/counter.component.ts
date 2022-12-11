import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() count: number = -1;

  // We increment the counter on init
  ngOnInit() {
    this.increment();
  }

  increment() {
    this.count++;
  }
}
