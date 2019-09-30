
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  msg:string = '';

  employees = [
    {'nombre': 'Mateo', 'apellido': 'Martinez', 'telefono': '7377727','cedula':'1090878965', 'fecha': '1999/08/04'},
    {'nombre': 'Diego', 'apellido': 'Escobar','telefono': '7262524','cedula':'1007564312' , 'fecha': '2001/03/04'},
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  
  addEmployee():void{
    this.employees.push(this.model);
    var answer = confirm('campo agregado');
    
    
  }

  deleteEmployee(i):void {
    var answer = confirm('¿Esta seguro de querer eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      
    }
  }

  myValue;
  editEmployee(i):void {
    
    this.model2.nombre = this.employees[i].nombre;
    this.model2.apellido = this.employees[i].apellido;
    this.model2.telefono = this.employees[i].telefono;
    this.model2.cedula = this.employees[i].cedula;
    this.model2.fecha = this.employees[i].fecha;
    this.myValue = i;
    
    
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        var answer = confirm('campo actualizado');
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
