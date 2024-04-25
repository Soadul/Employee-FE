import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ShowdataComponent} from "./showdata/showdata.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HttpClientModule, ShowdataComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employees';
}
