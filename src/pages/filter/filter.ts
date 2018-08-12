import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  providers: [GlobalStateProvider]
})
export class FilterPage {

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {

  }

}
