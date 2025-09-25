import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ActivityStats {
  uploaded: number;
  deleted: number;
}

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  getActivityStats(): Observable<ActivityStats> {
    // Simulate an API call with a delay
    const mockStats: ActivityStats = {
      uploaded: 16,
      deleted: 2,
    };
    return of(mockStats).pipe(delay(1000));
  }
}