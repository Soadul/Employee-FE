import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AllserviceService} from "../services/allservice.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,RouterModule
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})

export class EmployeeFormComponent implements OnInit {
  employeeForm = this.formBuilder.group({
    name: '',
    department: '',
    position: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private allservice: AllserviceService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.allservice.createEmployee(this.employeeForm.value)
      .then(response => {
        alert('Employee created successfully');
      })
      .catch(error => {
        alert('Error creating employee: ' + error.message);
      });
  }
}
