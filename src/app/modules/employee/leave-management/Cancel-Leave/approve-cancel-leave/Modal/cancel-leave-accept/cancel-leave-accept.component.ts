import { CancelRequestService } from 'src/app/services/leave-management/cancel-request.service';
import { AcceptCancelRequest } from './../../../../../../../models/leave-management/accept-cancel-request';
import { LeaveManagementInteractionService } from './../../../../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-cancel-leave-accept',
  templateUrl: './cancel-leave-accept.component.html',
  styleUrls: ['./cancel-leave-accept.component.css']
})
export class CancelLeaveAcceptComponent implements OnInit {

  info: any;
  acceptCancelRequest: AcceptCancelRequest = new AcceptCancelRequest();
  constructor(
    private interactionService: LeaveManagementInteractionService,
    private cancelRequestService: CancelRequestService,
    private token: TokenStorageService

  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getCancelRequestId();
  }

  getCancelRequestId() {
    this.interactionService.cancelRequestId$.subscribe(data => {
      this.acceptCancelRequest.cancelRequestId = data;
    })
  }
  acceptCancelLeaveRequest() {
    this.acceptCancelRequest.userName = this.info.username;
    this.cancelRequestService.acceptCancelRequest(this.acceptCancelRequest).subscribe(data =>{
      this.sendSuccessMessage();
    })
  }

  sendSuccessMessage(){
    this.interactionService.sendSuccessMsg("cancelRequestAccepted");
  }
}
