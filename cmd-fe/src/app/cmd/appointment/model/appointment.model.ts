//1. Define export class for models which are used in components and services
export class AppointmentModel{
    "id": number;
    "patient_name": string;
    "patient_age": number;
    "patient_id": number;
    "doctor_id": number;
    "doctor_name": string;
    "appointment_date": string;
    "appointment_time": string;
    "appointment_status": string;
    "patient_issue": string;
}