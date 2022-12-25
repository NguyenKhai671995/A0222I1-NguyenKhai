import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../model/customer/Customer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url = 'http://localhost:3000/customer'

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.url}`);
  }

  deleteById(id: number): Observable<Customer> {
    // @ts-ignore
    return this.http.delete(`${this.url}/${id}`)
  }


  save(customer: Customer): Observable<Customer> {
    // @ts-ignore
    return this.http.post(this.url, customer);
  }

  findById(id: number) {
    return this.http.get<Customer>(`${this.url}/${id}`);
  }

  updateById(value: Customer) {
    return this.http.put<Customer>(`${this.url}/${value.id}`, value);
  }
}
