import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../model/employee/Employee";
import {Facility} from "../../model/facility/Facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  url = 'http://localhost:3000/facility'

  constructor(private http: HttpClient) { }

  findALl(): Observable<Facility[]>{
    return this.http.get<Facility[]>(`${this.url}`);
  }
  save(facility: Facility):Observable<Facility[]> {
    // @ts-ignore
    return this.http.post(this.url,facility);
  }

  deleteById(id: number): Observable<Facility> {
    // @ts-ignore
    return this.http.delete(`${this.url}/${id}`)
  }
  findById(id:number){
    return this.http.get<Facility>(`${this.url}/${id}`)
  }

  updateById(value:Facility){
    console.log(value)
    return this.http.put<Facility>(`${this.url}/${value.id}`,value)
  }

  findByIdRest(id: number):Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }
}
