import { Injectable } from '@angular/core';
import {Headers,Http,Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerServiceService {
  constructor(private http:Http){}

  saveDataHttp(data: any [])
  {
    const header = new Headers({'Content-Type':'application/json'});
    // return this.http.post('https://first-http-project.firebaseio.com/data2.json',data,{headers:header})
    return this.http.put('https://first-http-project.firebaseio.com/data2.json',data,{headers:header})
  }

  getHttpData()
  {
    return this.http.get('https://first-http-project.firebaseio.com/data2.json')
      .map(
      (response: Response)=>{
        const data = response.json();
        for(let d of data)
        {
          d.name = 'fetched ' + d.name;
        }
        return data;
      }
    ).catch(
        (error: Response)=>{
          return Observable.throw('Something Went wrong')
        }
      )
  }

  getAppData()
  {
    return this.http.get('https://first-http-project.firebaseio.com/appName.json').map(
      (response: Response)=>{
        const data = response.json();
        return data;
      }
    )
  }
}
