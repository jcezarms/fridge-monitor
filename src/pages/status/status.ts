import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
  providers: [GlobalStateProvider]
})
export class StatusPage {

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {

  }

}
