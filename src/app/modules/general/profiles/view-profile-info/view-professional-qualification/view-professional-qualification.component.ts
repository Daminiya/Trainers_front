import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ProfessionalQualification } from './professional-qualification.model';
import { ProfessionalQualificationService } from './professional-qualification.service';
import { ProfileInfoService } from '../profile-table/profile-info.service';

@Component({
  selector: 'app-view-professional-qualification',
  templateUrl: './view-professional-qualification.component.html',
  styleUrls: ['./view-professional-qualification.component.css']
})



export class ViewProfessionalQualificationComponent implements OnInit {

  // displayedColumns: string[] = ['id', 'courseType', 'periodYearFrom', 'periodYearTo', 'courseName', 'result', 'result'];

  // professional = [
  //   { 'type': 'Professional Qualification', 'fyear': '1', 'tyear': '1', 'name': 'School1', 'subject': 'Subject1', 'grade': 'A' },
  //   { 'type': 'Professional Qualification', 'fyear': '2', 'tyear': '1', 'name': 'School2', 'subject': 'Subject2', 'grade': 'B' },

  // ]

  professional: ProfessionalQualification[];
  // dataSource = new MatTableDataSource<any>(this.professional);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  userId:Number
  ngOnInit() {   
    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this.GetProfessionalQualificationByUserId(userid);
      this.userId=userid
    })
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
      // this.dataSource.paginator.firstPage();
    // }
  }
  constructor(private router: Router, 
    private professionalQualificationService: ProfessionalQualificationService,
    private profileInfoService:ProfileInfoService) { }


  gotoNext() {
    this.router.navigate(['/profile/recordEmp']);
  }
  goBack() {
    this.router.navigate(['/profile/academicQual']);
  }

  GetProfessionalQualificationByUserId(uid) {
    return this.professionalQualificationService.getEmpProQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.professional = data;
    })
  }
  getEmpProQualification() {
    this.professionalQualificationService.getAllEmpProQualification().subscribe(data => {
      this.professional = data;
      // this.dataSource = new MatTableDataSource<any>(this.professional);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      console.log(data);
    })

  }
  getproQualificationId(data){
    this.profesionalObj=Object.assign({},data)
  }
  profesionalObj=new ProfessionalQualification();
  editproQualification(){
    this.profesionalObj.user=this.userId;
    return this.professionalQualificationService.editProQualification(this.profesionalObj).subscribe(data=>{
      this.GetProfessionalQualificationByUserId(this.userId);
    })
  }
  deleteproQualification(){
    return this.professionalQualificationService.deleteProQualification(this.profesionalObj).subscribe(data=>{
      this.GetProfessionalQualificationByUserId(this.userId);
    })
  }
}

