import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";
@Component({
  selector: 'app-emp-details',
  template: `
  
  Name:<input [(ngModel)]=username name='uname' >
  <button (click)='show()'>Click here</button>
  <p>  {{greet}} {{username}}</p>
      <table>
      <tr>
        <th>employeeId </th>
        <th>employeeName </th>
        <th>employeeAge </th>
        <th>employeeDesignation </th>
      </tr>
      <tr *ngFor='let e of empdet'>
       <td> {{e.employeeId}}  </td>
       <td>{{e.employeeName}}</td> 
       <td>{{e.employeeAge}}</td> 
       <td>{{e.employeeDesignation}}</td> 
      </tr>
      <table>
    
  `,
  styles: [
  ]
})
export class EmpDetailsComponent implements OnInit {

  
  username="";
  greetings:string[] = ["Hello", "Hi", "Namaste", "Salaam", "Bonjour"];
  greet:string;
  show()
  {
    
     this.greet = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }
  emp=new Employee(1,'aman',28,'Trainee');
  emp1=new Employee(2,'Rohit',21,'Trainee');
  emp2=new Employee(3,'aman',24,'Trainee');
  empdet:Employee[]=[this.emp1,this.emp2,this.emp];
  constructor() { }

  ngOnInit(): void {
  }

}
