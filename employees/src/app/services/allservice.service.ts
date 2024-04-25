import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = 'http://10.0.6.45:8080/login';
    const body = { username, password };
    return this.http.post(url, body).toPromise();
  }
  getEmployee() {
    const url = 'http://localhost:8080/employees/get';
    return this.http.get(url).toPromise();
  }

  createEmployee(employee: ɵTypedOrUntyped<{
    [K in keyof {
      name: string;
      position: string;
      department: string
    }]: ɵElement<{ name: string; position: string; department: string }[K], null>
  }, ɵFormGroupValue<{
    [K in keyof { name: string; position: string; department: string }]: ɵElement<{
      name: string;
      position: string;
      department: string
    }[K], null>
  }>, any>) {
    const url = 'http://localhost:8080/employees/create';
    return this.http.post(url, employee).toPromise();
  }
}
