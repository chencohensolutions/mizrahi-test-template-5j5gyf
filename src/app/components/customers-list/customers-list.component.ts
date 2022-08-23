import { Component } from '@angular/core';

import customersData from '../../data/MOCK_DATA.json';

interface ICustomer {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  account_id: String;
}

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent  {
  inputId = '';
  inputFirstName = '';
  inputLastName = '';
  inputEmail = '';
  inputAccountId = '';

  customers: ICustomer[] = customersData;
  customersFiltered: ICustomer[] = [];

  constructor() {
    this.updateFilter();
  }

  onIdChange(value: string) {
    this.inputId = value;
    this.updateFilter();
  }
  onFirstNameChange(value: string) {
    this.inputFirstName = value;
    this.updateFilter();
  }
  onLastNameChange(value: string) {
    this.inputLastName = value;
    this.updateFilter();
  }
  onEmailChange(value: string) {
    this.inputEmail = value;
    this.updateFilter();
  }
  onAccountIdChange(value: string) {
    this.inputAccountId = value;
    this.updateFilter();
  }

  updateFilter() {
    this.customersFiltered = this.customers.filter((customer)=>{
      const validId = customer.id.toString().toLowerCase().includes(this.inputId.toLowerCase());
      const validFirstName = customer.first_name.toString().toLowerCase().includes(this.inputFirstName.toLowerCase());
      const validLastName = customer.first_name.toString().toLowerCase().includes(this.inputLastName.toLowerCase());
      const validEmail = customer.first_name.toString().toLowerCase().includes(this.inputEmail.toLowerCase());
      const validAccountId = customer.first_name.toString().toLowerCase().includes(this.inputAccountId.toLowerCase());
      return validId && validFirstName && validLastName && validEmail && validAccountId;
    })
    console.log(this.inputId, this.inputFirstName, this.inputLastName, this.inputEmail, this.inputAccountId)
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
