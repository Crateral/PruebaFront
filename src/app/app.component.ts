import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../app/Models/Employee';
import { ServiceService } from '../app/Services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  employees!:Employee[];
  formaC!: FormGroup;
  txtId = document.getElementById("txtId");

  constructor(private service:ServiceService){
    this.formaC = new FormGroup({
      id: new FormControl(null, Validators.required)});
  }


  Search(termino: string){
    console.log(termino);
    if(termino != ""){
      this.service.getEmployeeById(termino).subscribe(
        data=>{
          this.employees=data;
        }
      );
    }else{
      this.service.getAllEmployee().subscribe(
        data=>{
          this.employees=data;
        }
      );
    }
    //this.txtId?.textContent
    //this.router.navigate(["/search"]);
    
  }
}
