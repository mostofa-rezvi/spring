import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesComponent} from './shared/activities/activities.component';
import {BodyhomeComponent} from './Home-Page/bodyhome/bodyhome.component';
import {AppointmenthomeComponent} from './Home-Page/appointmenthome/appointmenthome.component';
import {LoginComponent} from './Login-Page/login/login.component';
import {AdmindashboardComponent} from './Component/AdminDashBoard/dashboard/admindashboard.component';
import {DepartmenthomeComponent} from './Home-Page/departmenthome/departmenthome.component';
import {DoctorshomeComponent} from './Home-Page/DoctorsDepartment/doctorshome/doctorshome.component';
import {CardiacdepartmentComponent} from './Home-Page/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import {ChilddepartmentComponent} from './Home-Page/DoctorsDepartment/childdepartment/childdepartment.component';
import {GeneraldepartmentComponent} from './Home-Page/DoctorsDepartment/generaldepartment/generaldepartment.component';
import {NeurodepartmentComponent} from './Home-Page/DoctorsDepartment/neurodepartment/neurodepartment.component';
import {
  OrthopedicsdepartmentComponent
} from './Home-Page/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';
import {AuthGuard} from './security/guard/authguard.guard';
import {RoleGuard} from './security/guard/role.guard';
import {LastappointmentComponent} from './Home-Page/lastappointment/lastappointment.component';
import {WelcomepageComponent} from './Login-Page/welcomepage/welcomepage.component';
import {UserFormComponent} from "./user/user-form/user-form.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {RegisterComponent} from './Login-Page/register/register.component';
import {AppointmentCreateComponent} from './shared/appointment/appointment-create/appointment-create.component';
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
import {AddpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component";
import {
  UpdatepatientdocComponent
} from "./Component/DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component";
import {ViewpatientdocComponent} from "./Component/DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component";
import {ListofpatientComponent} from "./Component/DoctorDashBoard/Patient Doc/listofpatient/listofpatient.component";
import {AppointmentListComponent} from './shared/appointment/appointment-list/appointment-list.component';
import {DepartmentUpdateComponent} from "./shared/department/department-update/department-update.component";
import {DepartmentAddComponent} from "./shared/department/department-add/department-add.component";
import {DepartmentListComponent} from "./shared/department/department-list/department-list.component";
import {
  ManufacturerListComponent
} from "./Component/pharmacist/manufacturer/manufacturer-list/manufacturer-list.component";
import {
  ManufacturerUpdateComponent
} from "./Component/pharmacist/manufacturer/manufacturer-update/manufacturer-update.component";
import {
  ManufacturerAddComponent
} from "./Component/pharmacist/manufacturer/manufacturer-add/manufacturer-add.component";
import {MedicineListComponent} from "./Component/pharmacist/medicine/medicine-list/medicine-list.component";
import {MedicineAddComponent} from "./Component/pharmacist/medicine/medicine-add/medicine-add.component";
import {MedicineUpdateComponent} from "./Component/pharmacist/medicine/medicine-update/medicine-update.component";

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},

  // Home or Landing Page
  {path: 'home', component: BodyhomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'appointment', component: AppointmenthomeComponent},
  {path: 'departmenthome', component: DepartmenthomeComponent},
  {path: 'doctorshome', component: DoctorshomeComponent},
  {path: 'lastappointment', component: LastappointmentComponent},
  {path: 'welcome', component: WelcomepageComponent},

  // Common
  {path: 'salary', component: SalarysettingsComponent, canActivate: [AuthGuard]},
  {path: 'leave', component: LeavetypeComponent, canActivate: [AuthGuard]},
  {path: 'changepassword', component: ChngpassComponent, canActivate: [AuthGuard]},
  {path: 'payroll', component: AdminpayrollComponent, canActivate: [AuthGuard]},


  // Admin part

  // Doctor Crud
  {
    path: 'user-add', component: UserFormComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'user-update/:id', component: UserFormComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'user-list', component: UserListComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },

  // Receptionist Curd
  {
    path: 'viewrecep', component: ViewReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'updaterecep/:id', component: UpdateReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'addrecep', component: AddReceptionistComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'receplistadmin', component: ReceptionistlistadminComponent, canActivate: [AuthGuard]
  },

  // Profile Part

  // Admin
  {
    path: 'adminprofile', component: MyprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'adminprofileedit', component: EditprofileComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },

  // Doctor
  {
    path: 'doctorprofile', component: MyprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['DOCTOR']}
  },
  {
    path: 'doctorprofileedit', component: EditprofiledocComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['DOCTOR']}
  },

  // Nurse
  {
    path: 'nurseprofile', component: MyprofilenrsComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['NURSE']}
  },
  {
    path: 'nurseprofileedit', component: EditprofilenrsComponent, canActivate: [AuthGuard],
    data: {roles: ['NURSE']}
  },

  // Patient
  {
    path: 'patientprofile', component: MyprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['PATIENT']}
  },
  {
    path: 'patientprofileedit', component: EditprofilepntComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['PATIENT']}
  },

  // Receptionist
  {
    path: 'receptionist-profile', component: MyprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['RECEPTIONIST']}
  },
  {
    path: 'receptionist-profile-edit', component: EditprofilerecepComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['RECEPTIONIST']}
  },



  // Department Home Routing
  {path: 'cardiac', component: CardiacdepartmentComponent},
  {path: 'childdepart', component: ChilddepartmentComponent},
  {path: 'generaldepart', component: GeneraldepartmentComponent},
  {path: 'neurodepart', component: NeurodepartmentComponent},
  {path: 'orthodepart', component: OrthopedicsdepartmentComponent},




  // Patient Part
  {
    path: 'addpatient', component: AddpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['DOCTOR']}
  },
  {
    path: 'updatepatient/:id', component: UpdatepatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['DOCTOR']}
  },
  {
    path: 'viewpatient', component: ViewpatientdocComponent, canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['DOCTOR']}
  },
  {path: 'patientlist', component: ListofpatientComponent},






  // Auth Part
  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'userForm', component: UserFormComponent},

  {path: 'doappointment', component: AppointmentCreateComponent},
  {path: 'appointment-list', component: AppointmentListComponent},

  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/add', component: DepartmentAddComponent },
  { path: 'departments/update/:id', component: DepartmentUpdateComponent },

  { path: 'manufacturers', component: ManufacturerListComponent },
  { path: 'manufacturers/add', component: ManufacturerAddComponent },
  { path: 'manufacturers/update/:id', component: ManufacturerUpdateComponent },

  { path: 'medicines', component: MedicineListComponent },
  { path: 'medicines/add', component: MedicineAddComponent },
  { path: 'medicines/update/:id', component: MedicineUpdateComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
