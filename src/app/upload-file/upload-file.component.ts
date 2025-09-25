import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as XLSX from 'xlsx';

export interface UrlRecord {
  'S.No': number;
  'Short URL': string;
  'Destination URL': string;
}

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements AfterViewInit {
  displayedColumns: string[] = ['S.No', 'Short URL', 'Destination URL'];
  dataSource = new MatTableDataSource<UrlRecord>();
  recordCount = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // Convert sheet to JSON and add Serial Number
      const data: any[] = XLSX.utils.sheet_to_json(ws);
      const formattedData: UrlRecord[] = data.map((row, index) => ({
        'S.No': index + 1,
        'Short URL': row['Short URL'],
        'Destination URL': row['Destination URL'],
      }));

      this.dataSource.data = formattedData;
      this.recordCount = formattedData.length;
      this.dataSource.paginator = this.paginator; // Re-assign paginator after data change
    };
    reader.readAsBinaryString(target.files[0]);
  }
}