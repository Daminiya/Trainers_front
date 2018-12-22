import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Payment } from '../Modal/payment';

import { UserService } from '../Service/user.service';
import { PaymentService } from '../Service/payment.service';
import { User } from '../Modal/user';

@Component({
  selector: 'app-view-payment-history',
  templateUrl: './view-payment-history.component.html',
  styleUrls: ['./view-payment-history.component.css']
})
export class ViewPaymentHistoryComponent implements OnInit {
  paymentObj: Payment = new Payment();
  payments: Payment[];

  user: User[];

  msg: any;

  //payments: any;
  displayedColumns: string[] = ['trainerName', 'date', 'amount', 'paymentStatus', 'button', 'payment'];



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Payment>();
  constructor(private paymentService: PaymentService,
    private userService: UserService) { }

  ngOnInit() {
    this.getAllPaymentList();
    this.getUserList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getAllPaymentList() {
    this.paymentService.getAllPayment().subscribe(data => {
      console.log(data);
      this.payments = data;
      this.dataSource = new MatTableDataSource<any>(this.payments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  getUserList() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
  editPayment(payment) {
    console.log(payment);
    this.paymentObj = Object.assign({}, payment);
  }

  deletePaymentById(payment) {
    console.log(payment);
    this.paymentService.deletePayment(payment).subscribe(data => {
      this.getAllPaymentList();
    });
  }
  updatePayment() {
    this.paymentService.updatePayment(this.paymentObj).subscribe(data => {
      this.getAllPaymentList();
    });
  }

}