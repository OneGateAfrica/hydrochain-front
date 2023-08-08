import { Injectable } from '@angular/core';
import {AbstractServiceService} from "../abstract/abstract.service";
import {Job} from "../../models/Job";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobService extends AbstractServiceService<Job>{

  constructor(http:HttpClient) {
    super("job" , http);
  }

}
