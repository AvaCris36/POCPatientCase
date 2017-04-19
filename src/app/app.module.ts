import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule } from 'ngx-pagination';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientDetailsService } from './patient-details.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PatientDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
