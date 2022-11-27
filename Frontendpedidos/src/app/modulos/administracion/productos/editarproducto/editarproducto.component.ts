import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {
  id: string = '';
  fgValidador: FormGroup = this.fb.group({
        'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductosService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }
  
BuscarProducto(){
this.servicioProducto.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloProducto)=>{
  this.fgValidador.controls["id"].setValue(this.id); 
  this.fgValidador.controls["nombre"].setValue(datos.nombre);
  this.fgValidador.controls["precio"].setValue(datos.precio);
  this.fgValidador.controls["imagen"].setValue(datos.imagen);
});
}

  EditarProducto(){
    let id = this.fgValidador.controls["id"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let imagen = this.fgValidador.controls["imagen"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.precio = precio;
    p.imagen = imagen;
    p.id = id;
    this.servicioProducto.ActualizarProducto(p).subscribe((datos:ModeloProducto)=> {
      alert("Producto actualizado correctamente...");
      this.router.navigate(["/administracion/listarproductos"]);
    },(error:any)=>{
      alert("Error actualizando el producto ...");
    })
  }

}
