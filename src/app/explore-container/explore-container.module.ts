import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { CapObdComponent } from './cap-obd/cap-obd.component';
import { exploreRoutingModule } from './explore-routing.module';
import { ResultadoComponent } from './resultado/resultado.component';
import { InspeccionComponent } from './inspeccion/inspeccion.component';


@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule,
    exploreRoutingModule
  ],
  declarations: [
    ExploreContainerComponent,
    CapObdComponent,
    ResultadoComponent,
    InspeccionComponent,
  ],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
