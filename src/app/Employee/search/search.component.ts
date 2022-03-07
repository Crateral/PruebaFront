import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/Router';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees!:Employee[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe(
      data=>{
        this.employees=data;
      }
    )
  }

}
