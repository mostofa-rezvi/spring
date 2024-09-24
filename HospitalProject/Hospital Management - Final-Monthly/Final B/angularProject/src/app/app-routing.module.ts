import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './shared/activities/activities.component';
import { BodyhomeComponent } from './Home-Page/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './Home-Page/appointmenthome/appointmenthome.component';
import { LoginComponent } from './Login-Page/login/login.component';
import { AdmindashboardComponent } from './Component/AdminDashBoard/dashboard/admindashboard.component';
import { DepartmenthomeComponent } from './Home-Page/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './Home-Page/DoctorsDepartment/doctorshome/doctorshome.component';
import { CardiacdepartmentComponent } from './Home-Page/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { ChilddepartmentComponent } from './Home-Page/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './Home-Page/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { NeurodepartmentComponent } from './Home-Page/DoctorsDepartment/neurodepartment/neurodepartment.component';
import { OrthopedicsdepartmentComponent } from './Home-Page/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import { AuthGuard } from './security/guard/authguard.guard';
import { RoleGuard } from './security/guard/role.guard';
import { LastappointmentComponent } from './Home-Page/lastappointment/lastappointment.component';
import { WelcomepageComponent } from './Login-Page/welcomepage/welcomepage.component';
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { RegisterComponent } from './Login-Page/register/register.component';
import { AppointmentCreateComponent } from './shared/appointment/appointment-create/appointment-create.component';
import {
  ViewReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/viewreceptionist/viewreceptionist.component";
import {
  UpdateReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/updatereceptionist/updatereceptionist.component";
import {
  AddReceptionistComponent
} from "./Component/AdminDashBoard/Receptionist/addreceptionist/addreceptionist.component";
import {
  ReceptionistlistadminComponent
} from "./Component/AdminDashBoard/Receptionist/receptionistlistadmin/receptionistlistadmin.component";
import {ViewdepartmentComponent} from "./Component/AdminDashBoard/Department/viewdepartment/viewdepartment.component";
import {
  UpdatedepartmentComponent
} from "./Component/AdminDashBoard/Department/updatedepartment/updatedepartment.component";
import {AdddepartmentComponent} from "./Component/AdminDashBoard/Department/adddepartment/adddepartment.component";
import {SalarysettingsComponent} from "./shared/Settings/salarysettings/salarysettings.component";
import {LeavetypeComponent} from "./shared/Settings/leavetype/leavetype.component";
import {ChngpassComponent} from "./shared/Settings/chngpass/chngpass.component";
import {AdminpayrollComponent} from "./shared/payroll/adminpayroll.component";
import {MyprofileComponent} from "./Component/AdminDashBoard/Profile/myprofile/myprofile.component";
import {EditprofileComponent} from "./Component/AdminDashBoard/Profile/editprofile/editprofile.component";
import {MyprofiledocComponent} from "./Component/DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component";
import {
  EditprofiledocComponent
} from "./Component/DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component";
import {MyprofilenrsComponent} from "./Component/NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component";
import {EditprofilenrsComponent} from "./Component/NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component";
import {MyprofilepntComponent} from "./Component/PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component";
import {
  EditprofilepntComponent
} from "./Component/PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component";
import {
  MyprofilerecepComponent
} from "./Component/ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component";
import {
  EditprofilerecepComponent
} from "./Component/ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component";
import {
  AddappointmentComponent
} from "./Component/ReceptionistDashBoard/ReceptionistAppointment/addappointment/addappointment.component";
import {
  UpdateappointmentComponent
} from "./Component/ReceptionistDashBoard/ReceptionistAppointment/updateappointment/updateappointment.component";
import {
  ViewappointmentComponent
} from "./Component/ReceptionistDashBoard/ReceptionistAppointment/viewappointment/viewappointment.component";
import {
  ListofappointmentComponent
} from "./Component/ReceptionistDashBoard/ReceptionistAppointment/listofappointment/listofappointment.component";
import {AddpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component";
import {
  UpdatepatientdocComponent
} from "./Component/DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component";
import {ViewpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component";
import {ListofpatientComponent} from "./Component/DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component";
import { AppointmentListComponent } from './shared/appointment/appointment-list/appointment-list.component';

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

  { path: 'register', component: RegisterComponent },

  {path: 'doappointment', component: AppointmentCreateComponent},

  {path: 'appointment-list', component: AppointmentListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
