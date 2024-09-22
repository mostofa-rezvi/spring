import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { AdddoctorComponent } from './Doctors/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './Doctors/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { BodyhomeComponent } from './HomePage/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './HomePage/appointmenthome/appointmenthome.component';
import { LoginComponent } from './security/login/login.component';
import { SalarysettingsComponent } from './Admin/Settings/salarysettings/salarysettings.component';
import { LeavetypeComponent } from './Admin/Settings/leavetype/leavetype.component';
import { ChngpassComponent } from './Admin/Settings/chngpass/chngpass.component';
import { AdminpayrollComponent } from './Admin/adminpayroll/adminpayroll.component';
import { ViewdepartmentComponent } from './Admin/Department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './Admin/Department/adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './Admin/Department/updatedepartment/updatedepartment.component';
import { ViewReceptionistComponent } from './Admin/Receptionist/viewreceptionist/viewreceptionist.component';
import { UpdateReceptionistComponent } from './Admin/Receptionist/updatereceptionist/updatereceptionist.component';
import { AddReceptionistComponent } from './Admin/Receptionist/addreceptionist/addreceptionist.component';
import { MyprofileComponent } from './Admin/Profile/myprofile/myprofile.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { EditprofileComponent } from './Admin/Profile/editprofile/editprofile.component';
import { DepartmenthomeComponent } from './HomePage/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './HomePage/DoctorsDepartment/doctorshome/doctorshome.component';
import { MyprofiledocComponent } from './DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component';
import { EditprofiledocComponent } from './DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component';
import { MyprofilenrsComponent } from './NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component';
import { EditprofilenrsComponent } from './NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component';
import { MyprofilepntComponent } from './PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component';
import { EditprofilepntComponent } from './PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component';
import { MyprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component';
import { EditprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component';
import { DoctorlistadminComponent } from './Doctors/doctorlistadmin/doctorlistadmin.component';
import { ReceptionistlistadminComponent } from './Admin/Receptionist/receptionistlistadmin/receptionistlistadmin.component';
import { AddappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/addappointment/addappointment.component';
import { UpdateappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/updateappointment/updateappointment.component';
import { ViewappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/viewappointment/viewappointment.component';
import { ListofappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/listofappointment/listofappointment.component';
import { CardiacdepartmentComponent } from './HomePage/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { ChilddepartmentComponent } from './HomePage/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './HomePage/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { NeurodepartmentComponent } from './HomePage/DoctorsDepartment/neurodepartment/neurodepartment.component';
import { OrthopedicsdepartmentComponent } from './HomePage/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import { AddpatientdocComponent } from './DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component';
import { UpdatepatientdocComponent } from './DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component';
import { ViewpatientdocComponent } from './DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component';
import { AuthGuard } from './security/guard/authguard.guard';
import { RoleGuard } from './security/guard/role.guard';
import { LastappointmentComponent } from './HomePage/lastappointment/lastappointment.component';
import { WelcomepageComponent } from './Registration/welcomepage/welcomepage.component';
import { ListofpatientComponent } from './DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },

  // Home or Landing Page
  { path: 'home', component: BodyhomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'appointment', component: AppointmenthomeComponent },
  { path: 'departmenthome', component: DepartmenthomeComponent },
  { path: 'doctorshome', component: DoctorshomeComponent },
  { path: 'lastappointment', component: LastappointmentComponent },
  { path: 'welcome', component: WelcomepageComponent },


  // Admin part
  // Adim > Doctor Crud
  {
    path: 'user-add', component: UserFormComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'user-update/:id', component: UserFormComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'user-list', component: UserListComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  /*{
    path: 'viewUser', component: ViewdoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },*/

  // Admin > Receptionist Curd
  {
    path: 'viewrecep', component: ViewReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'updaterecep/:id', component: UpdateReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'addrecep', component: AddReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'receplistadmin', component: ReceptionistlistadminComponent, canActivate: [AuthGuard]
  },

  // Admin > Department Crud
  { path: 'viewdepartment', component: ViewdepartmentComponent, canActivate: [AuthGuard] },
  {
    path: 'updatedepartment/:id', component: UpdatedepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'adddepartment', component: AdddepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },



  // Admin > Other Component
  {
    path: 'salary', component: SalarysettingsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'leave', component: LeavetypeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'changepassword', component: ChngpassComponent, canActivate: [AuthGuard]
  },
  {
    path: 'payroll', component: AdminpayrollComponent, canActivate: [AuthGuard]
  },


  // Profile Part

  // Admin > Profile
  {
    path: 'adminprofile', component: MyprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'adminprofileedit', component: EditprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },

  // Doctor > Profile
  {
    path: 'doctorprofile', component: MyprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['DOCTOR'] }
  },
  {
    path: 'doctorprofileedit', component: EditprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['DOCTOR'] }
  },

  // Nurse > Profile
  {
    path: 'nurseprofile', component: MyprofilenrsComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['NURSE'] }
  },
  {
    path: 'nurseprofileedit', component: EditprofilenrsComponent, canActivate: [AuthGuard],
    data: { roles: ['NURSE'] }
  },

  // Patient > Profile
  {
    path: 'patientprofile', component: MyprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['PATIENT'] }
  },
  {
    path: 'patientprofileedit', component: EditprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['PATIENT'] }
  },

  // Receptionist > Profile
  {
    path: 'receptionist-profile', component: MyprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RECEPTIONIST'] }
  },
  {
    path: 'receptionist-profile-edit', component: EditprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RECEPTIONIST'] }
  },




  // Receptionist Part

  // Receptionist > Appointment for all
  {
    path: 'addappointment', component: AddappointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'updateappointment/:id', component: UpdateappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: [['ADMIN']] }
  },
  {
    path: 'viewappointment', component: ViewappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: [['ADMIN']] }
  },
  { path: 'listappointment', component: ListofappointmentComponent },

  // Department Home Routing
  { path: 'cardiac', component: CardiacdepartmentComponent },
  { path: 'childdepart', component: ChilddepartmentComponent },
  { path: 'generaldepart', component: GeneraldepartmentComponent },
  { path: 'neurodepart', component: NeurodepartmentComponent },
  { path: 'orthodepart', component: OrthopedicsdepartmentComponent },

  // Patient Part
  {
    path: 'addpatient', component: AddpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['DOCTOR'] }
  },
  {
    path: 'updatepatient/:id', component: UpdatepatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['DOCTOR'] }
  },
  {
    path: 'viewpatient', component: ViewpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['DOCTOR'] }
  },
  { path: 'patientlist', component: ListofpatientComponent },




  // Auth Part
  { path: 'login', component: LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
