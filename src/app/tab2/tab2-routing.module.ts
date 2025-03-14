import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ResultadoComponent } from '../explore-container/resultado/resultado.component';
import { InspeccionComponent } from '../explore-container/inspeccion/inspeccion.component';
import { CapObdComponent } from '../explore-container/cap-obd/cap-obd.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {path: 'resultado/:id', component: ResultadoComponent},
  {path: 'inspeccion/:id', component: InspeccionComponent},
  {path: 'obd/:id', component: CapObdComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
