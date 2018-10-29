import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Listing } from '../../../../sdk/models';
import { ListingApi } from '../../../../sdk/services';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.scss']
})
export class ListingDetailComponent implements OnInit {

  listing: {}

  constructor(private route: ActivatedRoute,
    private listingApi: ListingApi) { }

  ngOnInit() {
    this.initListing()
  }

  initListing(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const listingFilter = {
      where: { id: id },
      include: [{ seller: ['owner', { owningPartners: [{ partners: 'contact' }] }, 'asset'] }, 'listingAgent', { listingPartners: [{ partners: 'contact' }] }, 'listingPrices']
    };

    this.listingApi.findOne(listingFilter).subscribe(listing => {
      this.listing = listing
    })


  }

}
