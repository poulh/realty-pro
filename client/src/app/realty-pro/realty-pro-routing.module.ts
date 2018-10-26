import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';

import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'listings', component: ListingsComponent, data: { title: extract('Listings') } }
  ])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: []
})
export class RealtyProRoutingModule { }
