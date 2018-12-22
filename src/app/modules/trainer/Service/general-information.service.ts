import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralInformation } from '../Model/general-information';

@Injectable({
  providedIn: 'root'
})
export class GeneralInformationService {
  constructor(private httpObj:HttpClient) { }
  private generalInformationurl = "http://localhost:8080/hrm_system/generalInformation";

  public getGenerelInformation(){
    return this.httpObj.get<GeneralInformation[]>(this.generalInformationurl);
  }
  public createGeneralInformation(data){
    return this.httpObj.post<GeneralInformation>(this.generalInformationurl,data);
  }
}
