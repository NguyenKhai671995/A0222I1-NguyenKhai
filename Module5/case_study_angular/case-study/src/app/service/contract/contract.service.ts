import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../../model/contract/Contract";
import {Facility} from "../../model/facility/Facility";


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  url = 'http://localhost:3000/contract'

  constructor(private http: HttpClient) { }

  getAllContract(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.url}`);
  }

  save(contract: Contract):Observable<Contract> {

    if(contract.id == null)   return this.http.post(this.url,contract);
    return this.http.put(`${this.url}/${contract.id}`,contract);
  }

  findById(id:number){
    return this.http.get<Contract>(`${this.url}/${id}`)
  }

  updateById(value:Contract){
    console.log(value)
    return this.http.put<Contract>(`${this.url}/${value.id}`,value)
  }
  deleteById(id: number): Observable<Contract> {
    return this.http.delete(`${this.url}/${id}`)
  }
}
