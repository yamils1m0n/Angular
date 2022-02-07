import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensajes.interface';

const ELEMENT_DATA: Mensaje[] = [
  {remitente: 'Yamil', destinatario: 'Luisa Lane', fecha: '05/02/2020', mensaje: 'Hola buenas tardes'},
  {remitente: 'Yamil', destinatario: 'Bruno Diaz', fecha: '05/02/2020', mensaje: 'Se mando el remito'},
  {remitente: 'Yamil', destinatario: 'Pepito Moreno', fecha: '05/02/2020', mensaje: 'Te espero a la salida'},
  {remitente: 'Yamil', destinatario: 'Lautaro Ambar', fecha: '05/02/2020', mensaje: 'Nos vemos en Logistica'},
  {remitente: 'Yamil', destinatario: 'Emilio Estevez', fecha: '05/02/2020', mensaje: 'Se pudo registrar!'}
]

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent implements OnInit {

  displayedColumns: string[] = ['remitente', 'destinatario', 'fecha', 'mensaje'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
