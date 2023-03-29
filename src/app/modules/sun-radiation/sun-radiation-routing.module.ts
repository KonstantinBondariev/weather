import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunRadiationComponent } from './sun-radiation.component';

const routes: Routes = [{ path: '', component: SunRadiationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunRadiationRoutingModule { }
