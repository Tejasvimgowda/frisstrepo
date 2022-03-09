import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmd-fe';
  patients=[
    {
      "id": 1,
      "name": "Peter Thanos",
      "age": 36,
      "appointment_date": "23/10/2021",
      "appointment_time": "10:30",
      "patient_issue": "Hand Injury"
    },
    {
      "id": 2,
      "name": "Daneil Maxx",
      "age": 42,
      "appointment_date": "23/10/2021",
      "appointment_time": "13:30",
      "patient_issue": "Leg Injury"
    },
    {
      "id": 3,
      "name": "John Christ",
      "age": 24,
      "appointment_date": "23/10/2021",
      "appointment_time": "15:30",
      "patient_issue": "Brain Injury"
    },
    {
      "id": 4,
      "name": "Alan Dome",
      "age": 58,
      "appointment_date": "23/10/2021",
      "appointment_time": "18:30",
      "patient_issue": "Knee Injury"
    },
    {
      "id": 5,
      "name": "Glaneil Disoza",
      "age": 36,
      "appointment_date": "24/10/2021",
      "appointment_time": "09:00",
      "patient_issue": "Heart Pain"
    },
    {
      "id": 6,
      "name": "Glims Joseph",
      "age": 30,
      "appointment_date": "24/10/2021",
      "appointment_time": "11:00",
      "patient_issue": "Lungs Problem"
    }
  ]
}
