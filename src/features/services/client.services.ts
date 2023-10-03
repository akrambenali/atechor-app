import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Client } from 'src/business/model/client.model';
import { Cabinet } from 'src/business/model/cabinet.model';
import { Solutions } from 'src/business/model/solution.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _httpClient: HttpClient) {}

  /*   public getStores() : Observable<Store[]> {
    return this._httpClient.get<Store[]>(`${environment.apiUrl}stores`);
  }
  public getStore(id: string) : Observable<Store> {

    return this._httpClient.get<Store>(`${environment.apiUrl}stores/` + id)

  }
  public deleteStore(id: string) {
    return this._httpClient.delete(`${environment.apiUrl}stores/` + id)
  } */
  public addClient(client: Client) {
    const headers = { 'content-type': 'application/json' , 'Access-Control-Allow-Origin':'*' , 'Access-Control-Allow-Headers': 'X-Requested-With,content-type' , 'Access-Control-Allow-Methods':'POST'};
    const body = JSON.stringify(client);
    return this._httpClient.post(`${environment.apiUrl}/v1/clients/`, body, {
      headers: headers,
    });
  }

  public addCabinet(cabinet: Cabinet) {
    const headers = { 'content-type': 'application/json' , 'Access-Control-Allow-Origin':'*' , 'Access-Control-Allow-Headers': 'X-Requested-With,content-type' , 'Access-Control-Allow-Methods':'POST'};
    const body = JSON.stringify(cabinet);
    return this._httpClient.post(`${environment.apiUrl}/v1/cclients/`, body, {
      headers: headers,
    });
  }

  public getSolutions(solution: Solutions) : Observable<any> {
    const headers = { 'content-type': 'application/json' , 'Access-Control-Allow-Origin':'*' , 'Access-Control-Allow-Headers': 'X-Requested-With,content-type' , 'Access-Control-Allow-Methods':'POST'};
    const body = solution;
    return this._httpClient.post(`${environment.apiUrl}/v1/search/`, body, {
      headers: headers,
    });
  }

  public getScores(id: string) : Observable<any> {
    const headers = { 'content-type': 'application/json' , 'Access-Control-Allow-Origin':'*' , 'Access-Control-Allow-Headers': 'X-Requested-With,content-type' , 'Access-Control-Allow-Methods':'GET'};
    return this._httpClient.get(`${environment.apiUrl}/v1/scores/` + id ,{
      headers: headers,
    });
   
   }

}
