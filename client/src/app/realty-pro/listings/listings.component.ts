import { Component, OnInit } from '@angular/core';

import { Listing } from '../../../../sdk/models';
import { ListingApi } from '../../../../sdk/services';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: Listing[]

  constructor(private listingApi: ListingApi) { }

  ngOnInit() {
    this.getListings()
  }

  getListings(): void {
    const listingFilter = {
      order: 'startDate DESC',
      include: [{ seller: ['owner', { owningPartners: [{ partners: 'contact' }] }, 'asset'] }, 'listingAgent', { listingPartners: [{ partners: 'contact' }] }, 'listingPrices']
    };

    this.listingApi.find<Listing>(listingFilter).subscribe(listings => {
      this.listings = listings
    })

  }

}
