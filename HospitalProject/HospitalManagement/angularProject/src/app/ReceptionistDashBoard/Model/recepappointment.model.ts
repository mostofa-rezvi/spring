import { DepartmentModel } from "../../Admin/Department/Model/department.model";
import { DoctorModel } from "../../Doctors/Model/doctor.model";

export class RecepAppointment {
    id!: string; 
    patientName!: string;
    patientEmail!: string;
    appointmentDate!: string; // ISO format date string
    appointmentTime!: string; // ISO format time string

    department: DepartmentModel = new DepartmentModel();
    doctor: DoctorModel = new DoctorModel();
    
}


