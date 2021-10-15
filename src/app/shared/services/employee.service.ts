import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee, IScore} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  public getEmployeeItems(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://127.0.0.1:8000/api/employees/');
  }

  public addEmployeeItem(body: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/employees/', body);
  }

  public editEmployeeItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://127.0.0.1:8000/api/employees/' + id, body);
  }

  public removeEmployeeItem(id: number): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/api/employees/' + id);
  }
}
