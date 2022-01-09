import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees?: Employee[];
  // employees: any;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }

  // private getEmployees2() {
  //   this.employeeService.getEmployeesList().subscribe((data: any) => {
  //     this.employees = Array.from(Object.keys(data), (k) => data[k]);
  //     console.log(this.employees);
  //   });
  // }

  employeeDetails(id: any) {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: any) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }
}
