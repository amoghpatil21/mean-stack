import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app_routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddEmployeeComponent } from "./add-Employee/add-employee.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./Employee/employee.component";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        AddEmployeeComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}