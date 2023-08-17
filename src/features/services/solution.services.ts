import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Solutions } from 'src/business/model/solution.model';





@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  
  constructor(private _httpClient: HttpClient) { }


  public sendSolution (solution : Solutions) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(solution);
    return this._httpClient.post(`${environment.apiUrl}solutions/`, body,{'headers':headers})
  }
 
  
 
  
}
