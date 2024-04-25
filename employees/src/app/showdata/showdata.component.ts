import {Component, OnInit} from '@angular/core';
import {AllserviceService} from "../services/allservice.service";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-showdata',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './showdata.component.html',
  styleUrl: './showdata.component.css'
})
export class ShowdataComponent implements OnInit{
  public employees: any[] | undefined;

  ngOnInit(): void {
    this.allservice.getEmployee()
      .then(response => {
        this.employees = Array.isArray(response) ? response : undefined;
      })
      .catch(error => {
        console.error(error);
      });
  }
  constructor(private allservice: AllserviceService) {}

}
