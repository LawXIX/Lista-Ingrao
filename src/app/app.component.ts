import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lista-Ingrao';

  hasError= true;

  students= ['Lautaro Ingrao', 'Martin Prandi','Gonzalo Agustin','Morrones','Jimenez Fernando'];
  
  mostrarListado= false;

  ocultarFrase= false;


  alternarError() {
    this.hasError = !this.hasError;
  }
  
}