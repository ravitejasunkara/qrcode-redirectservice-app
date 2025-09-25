import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Observable, finalize } from 'rxjs';
import { ActivityService, ActivityStats } from './activity.service';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  private activityService = inject(ActivityService);

  stats$!: Observable<ActivityStats>;
  isLoading = false;

  ngOnInit(): void {
    this.fetchStats();
  }

  fetchStats(): void {
    this.isLoading = true;
    this.stats$ = this.activityService.getActivityStats().pipe(
      // Use the finalize operator to ensure isLoading is set to false
      // whether the observable completes or errors.
      finalize(() => (this.isLoading = false))
    );
  }

  onRefresh(): void {
    this.fetchStats();
  }
}