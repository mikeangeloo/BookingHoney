import { NgModule, ApplicationRef  } from '@angular/core';
import { MapComponent } from './map.component';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX_uKRKXVDMOPyLJYlNppEzVAUpTzh-2U'
    })
  ],
  providers: []
})
export class MapModule { }
