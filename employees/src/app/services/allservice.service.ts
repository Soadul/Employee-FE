import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {Observable} from "rxjs";

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
  getEmployee(): Observable<any> {
    const url = 'http://localhost:8080/employees/get';
    return this.http.get(url);
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

//===============Update Method =================

  // updateEmployee(id: string | null, employee: any) {
  //     const url = `http://localhost:8080/employees/update/${id}`;
  //     return this.http.put(url, employee).toPromise();
  //   }

  updateEmployee(id: any, employee: any): Observable<any> {
    const url = `http://localhost:8080/employees/update/${id}`;
    return this.http.put(url, employee);
  }

  deleteEmployee(id: any): Observable<any> {
    const url = `http://localhost:8080/employees/delete/${id}`;
    return this.http.delete(url);
  }

  getEmployeeById(id: any): Observable<any> {
    const url = `http://localhost:8080/employees/${id}`;
    return this.http.get(url);
  }
  downloadReport(format: string): Observable<Blob> {
    const url = `http://localhost:8080/report/${format}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
