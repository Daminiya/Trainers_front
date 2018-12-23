import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TechnologySkillLevelService } from '../../../Service/technology-skill-level.service';

@Component({
  selector: 'app-technology-skill-level',
  templateUrl: './technology-skill-level.component.html',
  styleUrls: ['./technology-skill-level.component.css']
})
export class TechnologySkillLevelComponent implements OnInit {

  displayedColumns: string[] = ['id', 'technology', 'skill', 'level', 'edit/delete'];

  technologySkill = [
    { 'id': '1', 'technology': 'Core Technology', 'skill': 'core Java', 'level': '3', 'edit/delete': '' },
  ]
  dataSource = new MatTableDataSource<any>(this.technologySkill);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generalInformationService: TechnologySkillLevelService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.technologySkill);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getGeneralInformation();
  }

  // RenderDataTable() {  
  //   this.dataService.GetAllRecords()  
  //     .subscribe(  
  //     res => {  
  //       this.MyDataSource = new MatTableDataSource();  
  //       this.MyDataSource.data = res;  
  //       console.log(this.MyDataSource.data); 

  getGeneralInformation() {
    return this.generalInformationService.getTechnologySkillLevel().subscribe(res => {
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=res;
      console.log(this.dataSource.data);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

