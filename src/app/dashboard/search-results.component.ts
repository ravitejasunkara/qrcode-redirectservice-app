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
  category: string;
}

const ELEMENT_DATA: AssetRecord[] = [
  { id: 1, aliasId: 'c57af13T2', date: '2023-10-27', appUrl: 'https://vast.ecolab.com/c57af13T2', imageUrl: 'https://dev.ecl.inc/c57af13T2', category: 'Dishmachine' },
  { id: 2, aliasId: '01bcdf3T1', date: '2023-10-26', appUrl: 'https://vast.ecolab.com/01bcdf3T1', imageUrl: 'https://dev.ecl.inc/01bcdf3T1', category: 'Dishmachine' },
  { id: 3, aliasId: '01bcdf37', date: '2023-10-25', appUrl: 'https://vast.ecolab.com/01bcdf37', imageUrl: 'https://dev.ecl.inc/01bcdf37', category: 'Dishmachine' },
  { id: 4, aliasId: 'c57af137', date: '2023-10-24', appUrl: 'https://vast.ecolab.com/c57af137', imageUrl: 'https://dev.ecl.inc/c57af137', category: 'Dishmachine' },
  { id: 5, aliasId: '3aa45433', date: '2023-10-23', appUrl: 'https://vast.ecolab.com/3aa45433', imageUrl: 'https://dev.ecl.inc/3aa45433', category: 'Dishmachine' },
  { id: 6, aliasId: '52d01036', date: '2023-10-22', appUrl: 'https://vast.ecolab.com/52d01036', imageUrl: 'https://dev.ecl.inc/52d01036', category: 'Dishmachine' },
  { id: 7, aliasId: 'cb6df37b', date: '2023-10-21', appUrl: 'https://vast.ecolab.com/cb6df37b', imageUrl: 'https://dev.ecl.inc/cb6df37b', category: 'Dishmachine' },
  { id: 8, aliasId: 'b328ad7e', date: '2023-10-20', appUrl: 'https://vast.ecolab.com/b328ad7e', imageUrl: 'https://dev.ecl.inc/b328ad7e', category: 'Dishmachine' },
  { id: 9, aliasId: '4739a53a', date: '2023-10-19', appUrl: 'https://vast.ecolab.com/4739a53a', imageUrl: 'https://dev.ecl.inc/4739a53a', category: 'Dishmachine' },
  { id: 10, aliasId: 'f66fe2c3', date: '2023-10-18', appUrl: 'https://vast.ecolab.com/f66fe2c3', imageUrl: 'https://dev.ecl.inc/f66fe2c3', category: 'Dishmachine' }
];

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  displayedColumns: string[] = ['id', 'aliasId', 'date', 'appUrl', 'imageUrl', 'category'];
  dataSource = ELEMENT_DATA;
}