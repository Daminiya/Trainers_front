import { Component, OnInit } from '@angular/core';
import { GeneralInformation } from '../../../Model/general-information';
import { GeneralInformationService } from '../../../Service/general-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  generalInfoObj: GeneralInformation = new GeneralInformation();
  constructor(private router: Router,
    private generalInfo: GeneralInformationService) { }

  ngOnInit() {
  }
  createGeneralInformation() {
       this.generalInfo.createGeneralInformation(this.generalInfoObj).subscribe(data => {
        console.log(data);
        
    //     // alert("added")
    //     this.next();
    //     this.responseMsg = "success";
    //     this.responseMsgTimeOut();
  
  
     });
    //   this.responseMsg = "fail";
    //   this.responseMsgTimeOut();
    // }
  
    // next() {
    //   this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
    
  
  }
  }
