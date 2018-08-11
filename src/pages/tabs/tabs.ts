import { Component } from '@angular/core';

import { FridgeMonitorPage } from '../monitor/monitor';
import { FilterPage } from '../filter/filter';
import { StatusPage } from '../status/status';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StatusPage;
  tab2Root = FridgeMonitorPage;
  tab3Root = FilterPage;

  constructor() {

  }
}
