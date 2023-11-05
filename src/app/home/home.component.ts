import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  counter = 0;
  private intervalTime!: Subscription;
  private destroyTime = new Subject<void>();

  ngOnInit() {}

  start() {
    this.intervalTime = interval(1000)
      .pipe(takeUntil(timer(62000)))
      .subscribe((value) => {
        this.counter = value;
      });
  }
  stop() {
    this.intervalTime.unsubscribe();
  }
  ngOnDestroy() {
    this.destroyTime.next();
    this.destroyTime.complete();
  }
}
