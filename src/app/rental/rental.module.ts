import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalComponent} from './rental.component';
import {RentalService} from './shared/rental.service';

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RentalService
  ],
})
export class RentalModule {

}
