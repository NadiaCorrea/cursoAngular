import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas:Entrada[];


  constructor() {
    this.listadoEntradas = [
      {titulo:'Introducción',
      resumen: 'Inicio del curso'},
      {titulo:'Tema 1',
      resumen: 'Tema 1: Typescript'},
      {titulo:'Tema 2',
      resumen: 'Angular'}
    ];
   }

  ngOnInit(): void {
  }

  public mostrarTitulo(titulo:string):void{
    alert(`Entrada seleccionada: ${titulo}`);
  }
}
