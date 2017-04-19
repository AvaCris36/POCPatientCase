import { Component, OnInit } from '@angular/core';
import { IPatient} from './patient-details';
import { PatientDetailsService} from './patient-details.service';


@Component ({
moduleId:module.id,
selector:'patient-details',
templateUrl: 'patient-details.component.html'
})

export class PatientDetailsComponent implements OnInit{

patients: IPatient[];

errorMessage:string;
constructor(private _patientDetailsService: PatientDetailsService){}

ngOnInit() {this.getPatients()}

getPatients(){
this._patientDetailsService.getPatients()
  .subscribe(
  patients => this.patients = patients,
  error => this.errorMessage = <any>error
  );
}

}
