import {RentType} from "./RenType";
import {FacilityType} from "./FacilityType";


export interface Facility {
  id?: number;
  nameService?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  areaPool?: number;
  numberOfFloors?: number;
  freeService?: string;
  rentType?: RentType;
  facilityType?: FacilityType;

}
