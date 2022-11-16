import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfig} from "../../app.config";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  view(data: any): Observable<any> {

    const body = data;
    const path = AppConfig.API_PATH+"v1/report/view";
    const header = ApiService.setHttpHeader({

      'Content-Type': 'application/json',
    });

    return this.http.post<any>(path, body, header);
  }

  send_mail(data: any): Observable<any> {

    const body = data;
    const path = AppConfig.API_PATH+"v1/report/sendmail";
    const header = ApiService.setHttpHeader({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(path, body, header);
  }

  download(data: any): Observable<any> {

    const body = data;
    const path = AppConfig.API_PATH+"v1/report/download";
    const header = ApiService.setHttpHeader({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(path, body, header);
  }


  private static setHttpHeader(hd:any){
    return {headers: new HttpHeaders(hd)};
  }
}
