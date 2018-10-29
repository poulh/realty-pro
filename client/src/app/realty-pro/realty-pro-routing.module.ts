import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';

import { ListingsComponent } from './listings/listings.component';
import { ListingCreateComponent } from './listings/listing-create.component';
import { ListingDetailComponent } from './listings/listing-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'listings', component: ListingsComponent, data: { title: extract('Listings') } },
    { path: 'listing', component: ListingCreateComponent, data: { title: extract('Listing Create') } },
    { path: 'listing/:id', component: ListingDetailComponent, data: { title: extract('Listing Detail') } }

  ])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class RealtyProRoutingModule { }
