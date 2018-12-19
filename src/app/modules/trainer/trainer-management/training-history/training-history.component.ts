import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-training-history',
  templateUrl: './training-history.component.html',
  styleUrls: ['./training-history.component.css']
})
export class TrainingHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'trainerName','trainingTopic','date','totalCoveredHours','edit/delete'];
  history = [
    { 'id':"employee",'trainerName':"aaaa/aa/aa",'trainingTopic':"dssa",'date':"ss" ,"totalCoveredHours":"edit","edit/delete":"edit"}
    
    
  ]

  dataSource = new MatTableDataSource<any>(this.history);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.history);
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