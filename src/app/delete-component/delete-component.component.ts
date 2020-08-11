import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.scss']
})
export class DeleteComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      console.log(params);
    });
  }

}
