import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Payment } from '../Modal/payment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private httpObj: HttpClient) { }
  private paymentUrl = "http://localhost:8080/trainer/payment";

  getAllPayment() {
    return this.httpObj.get<Payment[]>(this.paymentUrl);
  }

  createPayment(paymentdata) {
    return this.httpObj.post<Payment>(this.paymentUrl, paymentdata);
  }

  deletePayment(paymentdata) {
    return this.httpObj.delete<Payment>(this.paymentUrl + "/" + paymentdata.id, paymentdata)
  }

  updatePayment(paymentdata) {
    return this.httpObj.put<Payment>(this.paymentUrl + "/" + paymentdata.id, paymentdata)
  }
}