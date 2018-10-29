import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RealtyProRoutingModule } from '@app/realty-pro/realty-pro-routing.module';

import { ListingsComponent } from './listings/listings.component';
import { ListingDetailComponent } from './listings/listing-detail.component';
import { ListingCreateComponent } from './listings/listing-create.component';

@NgModule({
  imports: [
    CommonModule,
    RealtyProRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [ListingsComponent, ListingDetailComponent, ListingCreateComponent]
})
export class RealtyProModule { }
