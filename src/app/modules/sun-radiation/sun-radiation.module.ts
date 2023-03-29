import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunRadiationRoutingModule } from './sun-radiation-routing.module';
import { SunRadiationComponent } from './sun-radiation.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    SunRadiationComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    SunRadiationRoutingModule
  ]
})
export class SunRadiationModule { }
