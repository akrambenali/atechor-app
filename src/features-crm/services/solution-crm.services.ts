import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Solutions } from 'src/business/model/solution.model';

@Injectable({
  providedIn: 'root',
})
export class SolutionCrmService {
  constructor(private _httpClient: HttpClient) {}

  public sendSolution(solution: Solutions) {
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Methods': 'POST',
    };
    const body = JSON.stringify(solution);
    return this._httpClient.post(`${environment.apiUrl}/v1/solutionsCrm/`, body, { headers: headers });
  }
}
