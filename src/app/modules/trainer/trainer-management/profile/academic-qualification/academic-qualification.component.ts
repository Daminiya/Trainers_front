import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AccademicQualificationService } from 'src/app/modules/general/profiles/view-profile-info/view-academic-qualification/accademic-qualification.service';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { ExamTypeService } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.service';
import { ExamType } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.model';
import { AcademicQualification } from 'src/app/modules/general/profiles/view-profile-info/view-academic-qualification/academic-qualification';

@Component({
  selector: 'app-academic-qualification',
  templateUrl: './academic-qualification.component.html',
  styleUrls: ['./academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {
  academicQualifications: AcademicQualification[];
  academicQualObj=new AcademicQualification();
  // displayedColumns: string[] = ['syear', 'eyear','name', 'subject','graduation', 'grading'];
  // acadamic = [
  //   { 'syear':'2018','eyear':'2018', 'name':'abc', 'subject':'IT' , 'graduation':'2000', 'grading':'A'},
  //   { 'syear':'2019','eyear':'2018', 'name':'xyz', 'subject':'IT' , 'graduation':'2000', 'grading':'B' },

   
  // ]
  // secounddisplayedColumns: string[] = ['secound-syear', 'secound-eyear','secound-name', 'secound-subject','secound-graduation', 'secound-grading'];

  // secoundacadamic = [
  //   { 'secoundsyear':'2019','secoundeyear':'2020', 'secoundname':'abc', 'secoundsubject':'IT' , 'secoundgraduation':'2000', 'secoundgrading':'A'},
  //   { 'secoundsyear':'2019','secoundeyear':'2020', 'secoundname':'xyz', 'secoundsubject':'IT' , 'secoundgraduation':'2000', 'secoundgrading':'B' },

   
  // ]
  // dataSource = new MatTableDataSource<any>(this.acadamic);
  // dataSource2 = new MatTableDataSource<any>(this.secoundacadamic);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private router: Router,
    private academicService: AccademicQualificationService,
    private profileInfoService: ProfileInfoService,
    private examTypeService:ExamTypeService) { }
    examtypes:ExamType[]
    UserId:Number;

  ngOnInit() {
    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this.GetAcademicQualificationByUserId(userid);
      this.UserId=userid;
    })
    this.getExamTypeByid(),
    this. GetAcademicQualification()
   
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  GetAcademicQualificationByUserId(uid) {
    return this.academicService.getAcademicQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.academicQualifications = data;
    })
  }
  GetAcademicQualification() {
    return this.academicService.getAcademicQualification().subscribe(data => {
      console.log(data);
      this.academicQualifications = data;
    })
  }
  
  getExamTypeByid(){
    return this.examTypeService.viewExamtypes().subscribe(data=>{
      console.log(data);
      this.examtypes=data
    })
  }
  // getAllAcademicQualification() {
  //   this.academicService.getAcademicQualification().subscribe(data => {
  //     this.academicQualifications = data;
  //   })
  // }
  getAcadamicId(data){
    this.academicQualObj=Object.assign({},data);
    // alert( this.academicQualObj.id)
  }
  editAcadamicQualification(){
    // this.academicQualObj.user=this.userId;
    return this.academicService.updateAcademicQualification(this.academicQualObj).subscribe(data=>{
      this.GetAcademicQualificationByUserId(this.UserId)
      this.GetAcademicQualification();
    })
  }
  deleteAcadamicQualification(){
    this.academicService.deleteAcademicQualificationa(this.academicQualObj).subscribe(data=>{
      this.GetAcademicQualificationByUserId(this.UserId)
      this.GetAcademicQualification();
    })
  }

  // gotoNext() {
  //   this.router.navigate(['/profile/ProfQual']);
  // }

  // goBack() {
  //   this.router.navigate(['/profile/genInf']);
  // }
}