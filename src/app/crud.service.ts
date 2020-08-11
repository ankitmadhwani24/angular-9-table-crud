import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmployeeConfig } from './employee-config'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  ApiURL = 'http://localhost:3000/employee';
  
  constructor(public http : HttpClient) { }

  getData() {
    return this.http.get<any>(this.ApiURL);
  }

  deleteData(id) {
    let ApiURL = `${this.ApiURL}/${id}`;
    return this.http.delete<EmployeeConfig>(ApiURL);
  }

  postData(formData) {
    console.log('formData' + formData);
    
    return this.http.post<EmployeeConfig>(this.ApiURL, formData);
  }

  putData(data) {
    let ApiURL = `${this.ApiURL}/${data.id}`;
    return this.http.put<EmployeeConfig>(ApiURL, data);
  }
}
