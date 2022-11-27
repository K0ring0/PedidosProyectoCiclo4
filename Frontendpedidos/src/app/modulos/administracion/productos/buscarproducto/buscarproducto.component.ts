import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.css']
})
export class BuscarproductoComponent implements OnInit {

  listadoRegistros: ModeloProducto[]=[];
  constructor(private productoServicio: ProductosService) { }

  ngOnInit(): void {
    this.ObtenerListadoProducto();
  }
  
  ObtenerListadoProducto(){
    this.productoServicio.ObtenerRegistros().subscribe((datos:ModeloProducto[]) =>{
      this.listadoRegistros = datos;

    })
  }

}
