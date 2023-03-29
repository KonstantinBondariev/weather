import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./modules/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'sun-radiation',
    loadChildren: () =>
      import('./modules/sun-radiation/sun-radiation.module').then(
        (m) => m.SunRadiationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
