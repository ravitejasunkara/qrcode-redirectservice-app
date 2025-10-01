import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, RouterModule],
  template: `
    <div class="categories-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Categories</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <div class="category-title">Dishwasher Machine</div>
              <mat-list dense>
                <mat-list-item>Commercial Dishwashers</mat-list-item>
                <mat-list-item>Industrial Washers</mat-list-item>
              </mat-list>
            </mat-list-item>

            <mat-list-item>
              <div class="category-title">Food & Beverage</div>
              <mat-list dense>
                <mat-list-item>Beverage Equipment</mat-list-item>
                <mat-list-item>Food Prep</mat-list-item>
                <mat-list-item>Storage</mat-list-item>
              </mat-list>
            </mat-list-item>

            <mat-list-item>
              <div class="category-title">IT</div>
              <mat-list dense>
                <mat-list-item>Networking</mat-list-item>
                <mat-list-item>Endpoints</mat-list-item>
              </mat-list>
            </mat-list-item>

            <mat-list-item>
              <div class="category-title">Nalcowater</div>
              <mat-list dense>
                <mat-list-item>Water Treatment</mat-list-item>
                <mat-list-item>Pumps & Valves</mat-list-item>
              </mat-list>
            </mat-list-item>

            <mat-list-item>
              <div class="category-title">Healthcare</div>
              <mat-list dense>
                <mat-list-item>Sanitization</mat-list-item>
                <mat-list-item>Medical Equipment</mat-list-item>
              </mat-list>
            </mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .categories-container { padding: 24px; }
      .category-title { font-weight: 600; margin-bottom: 4px; }
      mat-list-item { display: block; padding: 8px 0; }
      mat-list mat-list-item { padding-left: 16px; }
    `
  ]
})
export class CategoriesComponent {}
