import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','startdate','enddate', 'starttime','endtime','topic','status'];

  availabilityDetails = [
    { 'id':'1', 'name':'Nisha', 'startdate' :'11.1.2018','enddate':'12.3.2018', 'starttime':'11.30AM','endtime':'12.21pm','topic':'work', 'status':'' },
  
    
  ]
  dataSource = new MatTableDataSource<any>(this.availabilityDetails);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.availabilityDetails);
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
