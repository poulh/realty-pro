import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings/listings.component';
import { RealtyProRoutingModule } from '@app/realty-pro/realty-pro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RealtyProRoutingModule,
  ],
  declarations: [ListingsComponent]
})
export class RealtyProModule { }
