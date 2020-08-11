import { Component, Input } from '@angular/core';
import { CrudService } from './crud.service';
import { EmployeeConfig } from './employee-config';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-table-app';
  isLoading = false;
  empConfig:EmployeeConfig;
  isDeleteAllowed = false;
  showModal = false;

  // model define we have created a new reord like in ember
  //Domain Model
  model = new EmployeeConfig();

  constructor(private employeeData: CrudService) {  }
  getEmployeeData() {
    this.isLoading = true;
    console.log('hitting api');
    this.employeeData.getData().subscribe((data:EmployeeConfig)=> {
      // gets data 100 array;
      // console.log(data);
      this.empConfig = data;
    },
      (error) => {
        console.log('error');
        
      },
      () => {
        this.isLoading = false;
        console.log('completed');
        
      }
    )
    //console.log(this.empConfig);
    
  }
  showDeleteAction() {
    this.isDeleteAllowed = !this.isDeleteAllowed;
  }

  showPostModal() {
    this.showModal = !this.showModal;
  }

  postData(form:NgForm) {
    console.log(form.value);
    let formData = form.value;
    this.employeeData.postData(formData).subscribe(data => {
      console.log(data)
    })
  }
 }
