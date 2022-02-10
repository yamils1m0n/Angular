import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensajes.interface';

const ELEMENT_DATA: Mensaje[] = [
  {remitente: 'Luisa Lane', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Hola buenas tardes'},
  {remitente: 'Bruno Diaz', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se mando el remito'},
  {remitente: 'Pepito Moreno', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Te espero a la salida'},
  {remitente: 'Lautaro Ambar', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Nos vemos en Logistica'},
  {remitente: 'Emilio Estevez', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se pudo registrar!'},
  {remitente: 'Luisa Lane', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Hola buenas tardes'},
  {remitente: 'Bruno Diaz', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se mando el remito'},
  {remitente: 'Pepito Moreno', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Te espero a la salida'},
  {remitente: 'Lautaro Ambar', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Nos vemos en Logistica'},
  {remitente: 'Emilio Estevez', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se pudo registrar!'},
  {remitente: 'Luisa Lane', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Hola buenas tardes'},
  {remitente: 'Bruno Diaz', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se mando el remito'},
  {remitente: 'Pepito Moreno', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Te espero a la salida'},
  {remitente: 'Lautaro Ambar', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Nos vemos en Logistica'},
  {remitente: 'Emilio Estevez', destinatario: 'Yamil', fecha: '05/02/2020', mensaje: 'Se pudo registrar!'}
]


@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.css']
})
export class RecibidosComponent implements OnInit {

  displayedColumns: string[] = ['remitente', 'destinatario', 'fecha', 'mensaje'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
