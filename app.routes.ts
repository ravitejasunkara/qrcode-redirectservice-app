import { Routes } from '@angular/router';
import { ActivityComponent } from './src/app/activity/activity.component';
import { DashboardComponent } from './src/app/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activity', component: ActivityComponent },
  // { path: 'upload-file', component: UploadFileComponent }, // Add this when you create the component
];