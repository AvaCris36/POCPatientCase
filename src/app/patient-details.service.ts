import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPatient } from './patient-details';

@Injectable()
export class PatientDetailsService {

  constructor(private _http: Http){}

  getPatients(): Observable<IPatient[]> {
  return this._http
  .get('http://www.mocky.io/v2/58ea771b1100009c02288220')
  .map((response:Response) => <IPatient[]> response.json());
  }
}
