import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Client } from 'src/business/model/client.model';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  constructor(private _httpClient: HttpClient) { }


/*   public getStores() : Observable<Store[]> {
    return this._httpClient.get<Store[]>(`${environment.apiUrl}stores`);
  }
  public getStore(id: string) : Observable<Store> {

    return this._httpClient.get<Store>(`${environment.apiUrl}stores/` + id)

  }
  public deleteStore(id: string) {
    return this._httpClient.delete(`${environment.apiUrl}stores/` + id)
  } */
  public addClient (client : Client) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(client);
    return this._httpClient.post(`${environment.apiUrl}clients/`, body,{'headers':headers})
  }
 
  
 
  
}
