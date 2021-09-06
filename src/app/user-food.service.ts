import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFoodService {

  constructor(private hc:HttpClient) { }

  createdata(formObj:any):Observable<any>{

   return this.hc.post("/user/upload",formObj);


  }
}
