import { Component, OnInit } from '@angular/core';
import { Payment } from '../Modal/payment';
import { User } from '../Modal/user';
import { PaymentService } from '../Service/payment.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-add-payment-history',
  templateUrl: './add-payment-history.component.html',
  styleUrls: ['./add-payment-history.component.css']
})
export class AddPaymentHistoryComponent implements OnInit {
  paymentObj: Payment = new Payment();
  payment: Payment[];

  user: User[];
  constructor(private paymentService: PaymentService,
    private userService: UserService, ) { }

  ngOnInit() {
    this.getAllPaymentList();
    this.getUserList();
  }
  clearPaymentFunction() {
    this.paymentObj.trainingDate = null;
    this.paymentObj.amountPaid = null;
    this.paymentObj.remainingAmount = null;
    this.paymentObj.paymentStatus = null;
    this.paymentObj.user = null;
  }
  getAllPaymentList() {
    this.paymentService.getAllPayment().subscribe(data => {
      console.log(data);
      this.payment = data;
    });
  }
  getUserList() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
  createPayment() {
    this.paymentService.createPayment(this.paymentObj).subscribe(data => {
      this.clearPaymentFunction()
      console.log(data);
      this.getAllPaymentList();
      this.getUserList();
    });
  }
}
