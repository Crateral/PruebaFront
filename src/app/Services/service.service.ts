import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

    Url = 'http://localhost:7070/bkEmployee/employee';

    getAllEmployee(){
      return this.http.get<Employee[]>(this.Url);
  }
    getEmployeeById(id:string){
      return this.http.get<Employee[]>(this.Url+"/"+id);
    }
}
