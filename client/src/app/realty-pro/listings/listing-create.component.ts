import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AddressApi } from '../../../../sdk/services';

@Component({
  selector: 'app-listing-create',
  templateUrl: './listing-create.component.html',
  styleUrls: ['./listing-create.component.scss']
})
export class ListingCreateComponent implements OnInit {

  addressForm: FormGroup;
  miscForm: FormGroup;
  ownerForm: FormGroup[];

  constructor(private formBuilder: FormBuilder,
    private addressApi: AddressApi) { }

  ngOnInit() {
    this.initMiscForm()
    this.initAddressForm()
  }

  initMiscForm(): void {
    const miscForm = {
      ownerOccupied: [true],
    };
    console.log(miscForm);

    this.miscForm = this.formBuilder.group(miscForm);
  }

  initAddressForm(): void {
    const addressForm = {
      street: ['', Validators.required],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    };
    console.log(addressForm);

    this.addressForm = this.formBuilder.group(addressForm);
  }

  initOwnerForm(): void {
    const contactForm = {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobilePhone: ['', Validators.required]
    };

    this.ownerForm.push(this.formBuilder.group(contactForm))

  }

  updateOrCreateAddress(): void {
    console.log("uorc address")
  }

}
