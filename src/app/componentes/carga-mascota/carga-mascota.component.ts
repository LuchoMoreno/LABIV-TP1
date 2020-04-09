import { Component, OnInit} from '@angular/core';
import { Mascota } from 'src/app/clases/mascota/mascota';

// 1- Crear un componente 'carga-mascota' que nos permita cargar nombre, imagen (con inputs) y 
// tipo (con select) y que devuelva por medio de un output los datos cargados.


@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {


  // CREO LOS ATRIBUTOS DE LA MASCOTA.

  nombre : string = null;

  imagen : string = null;

  tipo : string = null;


  // CREO UN ARRAY DE LISTA DE MASCOTAS.
  lista : Array<Mascota> = [];


  constructor() { }

  ngOnInit(): void {
    this.nombre = "";
  }


  public enviarAListado (event): void {
        
    this.lista.push(new Mascota(this.nombre, this.imagen, this.tipo));
    console.log(this.lista);
  }


}
