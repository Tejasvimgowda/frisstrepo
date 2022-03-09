//1. Import the needed dependencies - libraries, components and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentModel } from '../appointment/model/appointment.model';
import { AppointmentService } from '../appointment/service/appointment.service';

//2.Include Selector and Template Styles
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

//3. Component class definition
export class DashboardComponent implements OnInit {

  //4. Class Constructor
  //      Inject the services needed for backend services
  //      Inject Router to navigate to other pages 
  constructor( private appointmentService : AppointmentService, private router: Router) {

   }
  
   //5. Declare Local Variables
  allAppointment: AppointmentModel[]=[];
  appointmentSummary:any[]=[];

  //6. Method that gets called when the component is loaded
  ngOnInit(): void {
    //Call to get all the appointments
    this.getAppointments()

    //Call to get dashboard summary and statistics
    this.getAppointmentsSummary();
  }

  //7. Function to implement the logic 
  getAppointments(){
    this.appointmentService.getAllAppointments().subscribe((res) => {
      for(let r of res){
        this.allAppointment.push(r)
      }
    })
  }

  //8. Method to get Appointments Summary from the backend service
  getAppointmentsSummary(){
    this.appointmentService.getDashboardStatistics().subscribe((res: any) => {
      for(let r of res){
        this.appointmentSummary.push(r)
      }
    })
  }

  viewAppointment(){
    this.router.navigate(['../CMD/view-appointment'])
  }

  logOutApplication(selectedValue: string){
    if(selectedValue == "logout"){
      this.router.navigate(['../CMD/login'])
    }
  }
  

}
