import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeadlineService } from 'src/app/services/deadline.service';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-deadline-timer',
  templateUrl: './deadline-timer.component.html',
  styleUrls: ['./deadline-timer.component.scss'],
})
export class DeadlineTimerComponent implements OnInit, OnDestroy {
  startSeconds: number | null = null;
  currentSeconds: number | null = null;
  private destroy$ = new Subject<void>();

  constructor(private deadlineService: DeadlineService) {}

  ngOnInit(): void {
    this.deadlineService.getStartSeconds().subscribe((seconds) => {
      this.startSeconds = seconds;
      console.log('startSeconds', this.startSeconds);

      this.startCountdown();
    });
  }

  private startCountdown(): void {
    if (this.startSeconds === null) return;

    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((i) => {
        const remaining = this.startSeconds! - i;
        this.currentSeconds = remaining > 0 ? remaining : 0;

        if (remaining <= 0) {
          this.destroy$.next(); // stop countdown
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
