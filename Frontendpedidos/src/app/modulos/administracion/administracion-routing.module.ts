import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarpersonaComponent } from './personas/buscarpersona/buscarpersona.component';
import { CrearpersonaComponent } from './personas/crearpersona/crearpersona.component';
import { EditarpersonaComponent } from './personas/editarpersona/editarpersona.component';
import { EliminarpersonaComponent } from './personas/eliminarpersona/eliminarpersona.component';
import { BuscarproductoComponent } from './productos/buscarproducto/buscarproducto.component';
import { CrearproductoComponent } from './productos/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './productos/editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './productos/eliminarproducto/eliminarproducto.component';

const routes: Routes = [
  {
    path: "crearpersona",
    component: CrearpersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "listarproductos",
    component: BuscarproductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscarpersona",
    component: BuscarpersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editarpersona:/id",
    component: EditarpersonaComponent,
    canActivate: [ValidadorSesionGuard]
    
  },
  {
    path: "eliminarpersona",
    component: EliminarpersonaComponent,
    canActivate: [ValidadorSesionGuard]
    
  },
  {
    path: "crearproducto",
    component:CrearproductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editarproducto/:id",
    component: EditarproductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminarproducto",
    component: EliminarproductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscarproducto",
    component: BuscarpersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
