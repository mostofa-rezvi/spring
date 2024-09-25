
import {DoctorModel} from "../../AdminDashBoard/Doctors/Model/doctor.model";


export class RecepAppointment {
    id!: string;
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string; // ISO format date string
    appointmentTime!: string; // ISO format time string

    doctor: DoctorModel = new DoctorModel();

}


