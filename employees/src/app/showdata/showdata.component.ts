import {Component, OnInit} from '@angular/core';
import {AllserviceService} from "../services/allservice.service";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-showdata',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
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

  deleteEmployee(id: any): void {
    this.allservice.deleteEmployee(id)
      .subscribe(
        () => {
          alert('Employee deleted successfully');
          location.reload();
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
  selectedFormat: string = 'pdf';

  downloadReport(): void {
    alert('Starting download...');
    this.allservice.downloadReport(this.selectedFormat)
      .subscribe(
        (response: Blob) => {
          const url = window.URL.createObjectURL(response);
          const link = document.createElement('a');
          link.href = url;
          link.download = `report.${this.selectedFormat}`;
          link.click();
          alert('Report has been downloaded to the Report folder on the desktop.');
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
