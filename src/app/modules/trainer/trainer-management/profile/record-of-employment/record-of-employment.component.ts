import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-record-of-employment',
  templateUrl: './record-of-employment.component.html',
  styleUrls: ['./record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {

  displayedColumns: string[] = ['id','from','to','period','workPlaceName','workPlaceAddres','designation','typeOfWork','edit/delete'];

  recordOfEmployment = [
    {'id':'1','from':'25.10.2016','to':'25.10.2018','period':'02 years','workPlaceName':'SGIC','workPlaceAddres':'Jaffna','designation':'HR','typeOfWork':'Office','edit/delete':''},
    
  ]
  dataSource = new MatTableDataSource<any>(this.recordOfEmployment);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.recordOfEmployment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
