import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

// export interface AssetRecord {
//   id: number;
//   name: string;
//   date: string;
// }

// const ELEMENT_DATA: AssetRecord[] = [
//   { id: 1, name: 'Asset 1', date: '2023-10-27' },
//   { id: 2, name: 'Asset 2', date: '2023-10-26' },
//   { id: 3, name: 'Asset 3', date: '2023-10-25' },
//   { id: 4, name: 'Asset 4', date: '2023-10-24' },
//   { id: 5, name: 'Asset 5', date: '2023-10-23' },
//   { id: 6, name: 'Asset 6', date: '2023-10-22' },
//   { id: 7, name: 'Asset 7', date: '2023-10-21' },
//   { id: 8, name: 'Asset 8', date: '2023-10-20' },
//   { id: 9, name: 'Asset 9', date: '2023-10-19' },
//   { id: 10, name: 'Asset 10', date: '2023-10-18' },
// ];

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
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'aliasId', 'date','appUrl','imageUrl','category'];
  dataSource = ELEMENT_DATA;
  
}