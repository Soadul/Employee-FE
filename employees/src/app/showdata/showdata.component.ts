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
      .subscribe(
        (response: any[]) => {
          this.employees = Array.isArray(response) ? response : undefined;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
  constructor(private allservice: AllserviceService) {}

}
