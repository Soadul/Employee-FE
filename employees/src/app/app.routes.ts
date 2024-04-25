import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ShowdataComponent} from './showdata/showdata.component';
import {EmployeeFormComponent} from "./employee-form/employee-form.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'showdata',
    component: ShowdataComponent,
    children: [
      {path: 'create', component: EmployeeFormComponent}
    ]
  },

  {path: '', redirectTo: '/login', pathMatch: 'full'} // default route
];
