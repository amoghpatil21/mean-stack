import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Employee/employee.component';
import { AddEmployeeComponent } from './add-Employee/add-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee', pathMatch: "full"},
    { path: 'Employee', component: EmployeeComponent },
    { path: 'add-Employee', component: AddEmployeeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }