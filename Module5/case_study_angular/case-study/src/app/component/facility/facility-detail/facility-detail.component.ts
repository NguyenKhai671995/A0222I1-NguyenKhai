import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Facility} from "../../../model/facility/Facility";

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  facility: Facility;
  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityService.findByIdRest(+paramMap.get('id')).subscribe(data => {
        this.facility = data;
        console.log(this.facility);
      });
    });
  }

}
