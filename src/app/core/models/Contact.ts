import {BaseEntity} from "./abstracts/BaseEntity";

export class Contact extends BaseEntity{
  fname:string;
  lname:string;
  email:string;
  message:string;
}
