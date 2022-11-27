import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioProducto: ProductosService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let imagen = this.fgValidador.controls["imagen"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.precio = precio;
    p.imagen = imagen;
    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=> {
      alert("Producto almacenado correctamente...");
      this.router.navigate(["/administracion/listarproductos"]);
    },(error:any)=>{
      alert("Error almacenando producto ...");
    })
  }
}
