import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {path:'ocr', component: CapOcrComponent},
  // {path:'fotos', component: FotosComponent},
  // {path: '**', redirectTo: 'tabs/tab2'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class exploreRoutingModule {}
