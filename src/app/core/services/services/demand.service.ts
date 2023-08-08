import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractServiceService} from "../abstract/abstract.service";
import {Demand} from "../../models/Demand";

@Injectable({
  providedIn: 'root'
})
export class DemandService extends AbstractServiceService<Demand>{

  constructor(http:HttpClient) {
    super("demand" , http);
  }

}
