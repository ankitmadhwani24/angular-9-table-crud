import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
 
@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.scss']
})
export class UpdateComponentComponent implements OnInit {
  isLoading = false;
  isUpdate= false;
  employeeData: any;

  constructor(public empInfo: CrudService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.empInfo.getData().subscribe(data => {
      this.employeeData = data;
      this.isUpdate = true;
    }, (error) => {
      console.log(error);
      
    }, () => {
      this.isLoading = false;
    });
  }

}
