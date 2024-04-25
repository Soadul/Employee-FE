import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AllserviceService} from "../services/allservice.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {Router} from "@angular/router";


// @ts-ignore
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: any;
  password: any;
  constructor(private allservice: AllserviceService,private router:Router) {}
  ngOnInit() {}

  login(username: string, password: string) {
    this.allservice.login(username, password)
      .then(response => {
        // @ts-ignore
        alert('Login Successful: ' + response.result);
        this.router.navigate(['showdata']).then(r => console.log('navigated'));


      })
      .catch(error => {
        alert('Login Unsuccessful: ' + error.message);
      });
  }

}
