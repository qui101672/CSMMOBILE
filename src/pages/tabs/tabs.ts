import { Component } from '@angular/core';

import { SaleReportPage } from '../sale-report/sale-report';
import { MachineListPage } from '../machine-list/machine-list';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MachineListPage;
  tab2Root = SaleReportPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
