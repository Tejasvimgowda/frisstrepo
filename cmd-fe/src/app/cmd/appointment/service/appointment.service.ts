//1. Import the needed dependencies - libraries, components and services
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentModel } from '../model/appointment.model';

//2. Inject providein root to make service available throughout project
@Injectable({
  providedIn: 'root'
})

//3.Service Class Definition
export class AppointmentService {

  //4. Declare Local Variables
  apiurl: string;

  //5.Class Constructor
  //      Inject the services needed for backend services
  //      Inject Router to navigate to other pages
  constructor(private http:HttpClient) {
    //6. Assign backend api to the local variables
    this.apiurl = `http://localhost:3000/`
   }
  
   //7. FUnction Definitions to call backend services
  getAllAppointments(){
    return this.http.get<AppointmentModel[]>(`${this.apiurl}appointments`)
  }
  
  getDashboardStatistics(){
    return this.http.get(`${this.apiurl}appointmentSummary`)
  }
}
