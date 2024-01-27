import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  employees: any = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  getEmployee() {
    this.http.get('http://localhost:3000/Employee').subscribe({
      next: (res: any) => {
        console.log(res);

        this.employees = res.employees;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteEmployee(id: any) {
    this.http.delete('http://localhost:3000/employees/' + id).subscribe({
      next: (res: any) => {
        this.getEmployee();
      },
      error: (err: any) => {
      },
    });
  }

  goToAddEmployee() {
    this.router.navigate(['/add-Employee']);
  }
}
