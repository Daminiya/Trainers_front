import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AvailabilityService } from '../../../Service/availability.service';

@Component({
  selector: 'app-view-availability',
  templateUrl: './view-availability.component.html',
  styleUrls: ['./view-availability.component.css']
})
export class ViewAvailabilityComponent implements OnInit {

  ddisplayedColumns: string[] = ['id', 'name','startdate','enddate', 'starttime','endtime','status','edit/delete'];

  availabilityDetails = [
    { 'id':'1', 'name':'Nisha', 'startdate' :'11.1.2018','enddate':'12.3.2018', 'starttime':'11.30AM','endtime':'12.21pm','status':'accepted', 'edit/delete':'' },
  
    
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
