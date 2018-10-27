import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtyProRoutingModule } from '@app/realty-pro/realty-pro-routing.module';

import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listings/listing-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RealtyProRoutingModule,
  ],
  declarations: [ListingsComponent, ListingDetailComponent]
})
export class RealtyProModule { }
