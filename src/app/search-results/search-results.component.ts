import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

export interface AssetRecord {
  id: number;
  aliasId: string;
  date: string;
  appUrl: string;
  imageUrl: string;
}

const ELEMENT_DATA: AssetRecord[] = [
  { id: 1, aliasId: '01bcdf3T1', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/01bcdf3T1', imageUrl: 'https://dev.ecl.inc/01bcdf3T1' },
  { id: 2, aliasId: '01bcdf37', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/01bcdf37', imageUrl: 'https://dev.ecl.inc/01bcdf37' },
  { id: 3, aliasId: 'c57af137', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/c57af137', imageUrl: 'https://dev.ecl.inc/c57af137' },
  { id: 4, aliasId: '3aa45433', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/3aa45433', imageUrl: 'https://dev.ecl.inc/3aa45433' },
  { id: 5, aliasId: '52d01036', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/52d01036', imageUrl: 'https://dev.ecl.inc/52d01036' },
  { id: 6, aliasId: 'cb6df37b', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/cb6df37b', imageUrl: 'https://dev.ecl.inc/cb6df37b' },
  { id: 7, aliasId: 'b328ad7e', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/b328ad7e', imageUrl: 'https://dev.ecl.inc/b328ad7e' },
  { id: 8, aliasId: '4739a53a', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/4739a53a', imageUrl: 'https://dev.ecl.inc/4739a53a' },
  { id: 9, aliasId: 'f66fe2c3', date: '2025-09-03', appUrl: 'https://vast.ecolab.com/f66fe2c3', imageUrl: 'https://dev.ecl.inc/f66fe2c3' }
];

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  displayedColumns: string[] = ['id', 'aliasId', 'date', 'appUrl', 'imageUrl'];
  dataSource = ELEMENT_DATA;
}
