import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
// import { EmployeeConfig } from '../employee-config';
import { CrudService } from '../crud.service';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms'

@Component({
  selector: 'read-component',
  templateUrl: './read-component.component.html',
  styleUrls: ['./read-component.component.scss']
})
export class ReadComponentComponent {
  @Input() items;
  @Input() loading: boolean;
  @Input() isDeleteAllowed: boolean;
  @Input() isUpdate: boolean;
  isEditable = false;
  
  constructor(private router: Router, private employeeCurdService: CrudService) {}
  
  fullName(value) {
    return `${value.first_name} ${value.last_name}`;
  }

  ngOnInit(): void {
    console.log(this.isDeleteAllowed)
  }

  deleteRouteNavigation(item) {
    this.router.navigate(['/delete-component', item.id]);
  }

  deleteRecord(item) {
    this.employeeCurdService.deleteData(item).subscribe(()=>{
      this.items = this.items.filter((i) => {
        // console.log(item);
        return i.id !== item;
      }),
      (error)=> {
        console.log(error);
      }
    });
  }

  editRow(i) {
    if (i.isEditable) {
      delete i.isEditable;
      this.employeeCurdService.putData(i).subscribe(data=> {
        console.log(data);
      });
    } else {
      i.isEditable = true;
    }
    
  }
}
