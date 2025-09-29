
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

export interface AssetRecord {
  id: number;
  aliasId: string;
  date: string;
  appUrl: string;
  imageUrl: string;
  category: string;
  CreatedBy: string;
  CreatedDate: string;
  ModifiedBy: string;
  ModifiedDate: string;
}

const ELEMENT_DATA: AssetRecord[] = [
  {
    id: 1,
    aliasId: 'a1b2c3d4',
    date: '2023-10-01',
    appUrl: 'https://vast.ecolab.com/a1b2c3d4',
    imageUrl: 'https://dev.ecl.inc/a1b2c3d4',
    category: 'Dishmachine',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-01',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-15',
  },
  {
    id: 2,
    aliasId: 'e5f6g7h8',
    date: '2023-10-02',
    appUrl: 'https://vast.ecolab.com/e5f6g7h8',
    imageUrl: 'https://dev.ecl.inc/e5f6g7h8',
    category: 'Laundry',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-02',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-16',
  },
  {
    id: 3,
    aliasId: 'i9j0k1l2',
    date: '2023-10-03',
    appUrl: 'https://vast.ecolab.com/i9j0k1l2',
    imageUrl: 'https://dev.ecl.inc/i9j0k1l2',
    category: 'Sanitizer',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-03',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-17',
  },
  {
    id: 4,
    aliasId: 'm3n4o5p6',
    date: '2023-10-04',
    appUrl: 'https://vast.ecolab.com/m3n4o5p6',
    imageUrl: 'https://dev.ecl.inc/m3n4o5p6',
    category: 'Detergent',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-04',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-18',
  },
  {
    id: 5,
    aliasId: 'q7r8s9t0',
    date: '2023-10-05',
    appUrl: 'https://vast.ecolab.com/q7r8s9t0',
    imageUrl: 'https://dev.ecl.inc/q7r8s9t0',
    category: 'Dishmachine',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-05',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-19',
  },
  {
    id: 6,
    aliasId: 'u1v2w3x4',
    date: '2023-10-06',
    appUrl: 'https://vast.ecolab.com/u1v2w3x4',
    imageUrl: 'https://dev.ecl.inc/u1v2w3x4',
    category: 'Laundry',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-06',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-20',
  },
  {
    id: 7,
    aliasId: 'y5z6a7b8',
    date: '2023-10-07',
    appUrl: 'https://vast.ecolab.com/y5z6a7b8',
    imageUrl: 'https://dev.ecl.inc/y5z6a7b8',
    category: 'Sanitizer',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-07',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-21',
  },
  {
    id: 8,
    aliasId: 'c9d0e1f2',
    date: '2023-10-08',
    appUrl: 'https://vast.ecolab.com/c9d0e1f2',
    imageUrl: 'https://dev.ecl.inc/c9d0e1f2',
    category: 'Detergent',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-08',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-22',
  },
  {
    id: 9,
    aliasId: 'g3h4i5j6',
    date: '2023-10-09',
    appUrl: 'https://vast.ecolab.com/g3h4i5j6',
    imageUrl: 'https://dev.ecl.inc/g3h4i5j6',
    category: 'Dishmachine',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-09',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-23',
  },
  {
    id: 10,
    aliasId: 'k7l8m9n0',
    date: '2023-10-10',
    appUrl: 'https://vast.ecolab.com/k7l8m9n0',
    imageUrl: 'https://dev.ecl.inc/k7l8m9n0',
    category: 'Laundry',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-10',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-24',
  },
  {
    id: 11,
    aliasId: 'o1p2q3r4',
    date: '2023-10-11',
    appUrl: 'https://vast.ecolab.com/o1p2q3r4',
    imageUrl: 'https://dev.ecl.inc/o1p2q3r4',
    category: 'Sanitizer',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-11',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-25',
  },
  {
    id: 12,
    aliasId: 's5t6u7v8',
    date: '2023-10-12',
    appUrl: 'https://vast.ecolab.com/s5t6u7v8',
    imageUrl: 'https://dev.ecl.inc/s5t6u7v8',
    category: 'Detergent',
    CreatedBy: 'admin',
    CreatedDate: '2023-09-12',
    ModifiedBy: 'admin',
    ModifiedDate: '2023-09-26',
  },
];

@Component({
  selector: 'app-records-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss'],
})
export class RecordsTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'id',
    'aliasId',
    'date',
    'appUrl',
    'imageUrl',
    'category',
    'CreatedBy',
    'CreatedDate',
    'ModifiedBy',
    'ModifiedDate',
  ];
  dataSource = new MatTableDataSource<AssetRecord>(ELEMENT_DATA);
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
