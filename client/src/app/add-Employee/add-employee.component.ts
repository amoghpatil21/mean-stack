import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-Employee',
  templateUrl:'./add-Employee.component.html',
  styleUrl: './add-Employee.component.scss'
})
export class AddEmployeeComponent {
  newEmployee = {
    firstName: '',
    lastName: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  createEmployee() {
    this.http.post('http://localhost:3000/Employee', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }


  goToViewEmployee() {
    this.router.navigate(['/Employee']);
  }

}