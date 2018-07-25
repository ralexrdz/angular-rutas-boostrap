import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';              
// Habrá que importar el componente que será servido para cada ruta
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component'
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component'
import { PaginaTresComponent } from './pagina-tres/pagina-tres.component'

const routes: Routes = [
  {
    path: 'uno', // ruta raíz
    component: PaginaUnoComponent
  },
  {
    path: 'dos', // ruta raíz
    component: PaginaDosComponent
  },
  {
    path: 'tres', // ruta raíz
    component: PaginaTresComponent
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}