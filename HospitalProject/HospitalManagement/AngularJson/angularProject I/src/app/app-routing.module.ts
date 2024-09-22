import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { AddnurseComponent } from './Nurse/addnurse/addnurse.component';
import { ViewnurseComponent } from './Nurse/viewnurse/viewnurse.component';
import { UpdatenurseComponent } from './Nurse/updatenurse/updatenurse.component';
import { AdddoctorComponent } from './Doctors/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './Doctors/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { BodyhomeComponent } from './HomePage/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './HomePage/appointmenthome/appointmenthome.component';
import { LoginComponent } from './Registration/login/login.component';
import { RegisterComponent } from './Registration/register/register.component';
import { ForgotpasswordComponent } from './Registration/forgotpassword/forgotpassword.component';
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
import { NurselistadminComponent } from './Nurse/nurselistadmin/nurselistadmin.component';
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
import { LogoutComponent } from './Registration/logout/logout.component';
import { AuthGuard } from './Registration/Guard/authguard.guard';
import { RoleGuard } from './Registration/Guard/role.guard';
import { LastappointmentComponent } from './HomePage/lastappointment/lastappointment.component';
import { WelcomepageComponent } from './Registration/welcomepage/welcomepage.component';
import { ListofpatientComponent } from './DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component';

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
    path: 'adddoctor', component: AdddoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'viewdoctor', component: ViewdoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updatedoctor/:id', component: UpdatedoctorComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'doctorlistadmin', component: DoctorlistadminComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  // Admin > Nurse Crud
  {
    path: 'addnurse', component: AddnurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'viewnurse', component: ViewnurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updatenurse/:id', component: UpdatenurseComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'nurselistadmin', component: NurselistadminComponent, canActivate: [AuthGuard]
  },

  // Admin > Receptionist Curd
  {
    path: 'viewrecep', component: ViewReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'updaterecep/:id', component: UpdateReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'addrecep', component: AddReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'receplistadmin', component: ReceptionistlistadminComponent, canActivate: [AuthGuard] 
  },

  // Admin > Department Crud
  { path: 'viewdepartment', component: ViewdepartmentComponent, canActivate: [AuthGuard] },
  {
    path: 'updatedepartment/:id', component: UpdatedepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'adddepartment', component: AdddepartmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
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
    data: { role: 'admin' }
  },
  {
    path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'adminprofileedit', component: EditprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },

  // Doctor > Profile
  {
    path: 'doctorprofile', component: MyprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  {
    path: 'doctorprofileedit', component: EditprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },

  // Nurse > Profile
  {
    path: 'nurseprofile', component: MyprofilenrsComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'nurse' }
  },
  {
    path: 'nurseprofileedit', component: EditprofilenrsComponent, canActivate: [AuthGuard],
    data: { role: 'nurse' }
  },

  // Patient > Profile
  {
    path: 'patientprofile', component: MyprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'patientprofileedit', component: EditprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },

  // Receptionist > Profile
  {
    path: 'receptionist-profile', component: MyprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'receptionist' }
  },
  {
    path: 'receptionist-profile-edit', component: EditprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'receptionist' }
  },




  // Receptionist Part

  // Receptionist > Appointment for all
  {
    path: 'addappointment', component: AddappointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'updateappointment/:id', component: UpdateappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: ['admin'] }
  },
  {
    path: 'viewappointment', component: ViewappointmentComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: ['admin'] }
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
    data: { role: 'doctor' }
  },
  {
    path: 'updatepatient/:id', component: UpdatepatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  {
    path: 'viewpatient', component: ViewpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'doctor' }
  },
  { path: 'patientlist', component: ListofpatientComponent },




  // Auth Part
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  // {
  //   path: 'logout', component: LogoutComponent, canActivate: [AuthGuard, RoleGuard],
  //   data: { role: ['admin', 'user', 'doctor', 'nurse', 'receptionist'] }
  // },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
