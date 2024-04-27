import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AllserviceService} from "../services/allservice.service";

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {
  employeeForm = this.formBuilder.group({
    name: '',
    department: '',
    position: ''
  });
  employees: any[] = [];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private allservice: AllserviceService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.allservice.updateEmployee(id, this.employeeForm.value)
      .subscribe(
        () => {
          // Handle successful update here, e.g. navigate to another page or show a success message
          alert('Employee updated successfully')
          location.reload();

        },
        (error: any) => {
          alert('Employee Can\'t Update')

          console.error(error);
        }
      );
  }
}
