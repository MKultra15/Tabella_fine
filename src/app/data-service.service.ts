import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Employee, ServerData } from './types/Employee';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  deleteRow(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  getDataRows(apiURL:string, pageSize?:number,pageNumber?:number):Observable <ServerData>
  {
    const params = new HttpParams().set('page',pageNumber || 0).set('size',pageSize||10)
    return this.http.get<ServerData>(apiURL,{params : params})
    .pipe
    (
      retry(2)
    )
  }
}

