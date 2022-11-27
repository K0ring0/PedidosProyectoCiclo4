import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambiarclaveComponent } from './cambiarclave/cambiarclave.component';
import { RecuperarclaveComponent } from './recuperarclave/recuperarclave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecursiveAstVisitor } from '@angular/compiler';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambiarclaveComponent,
    RecuperarclaveComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
