import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateProvider } from '../../providers/global-state/global-state';
import { FridgePart } from '../../models/fridge-part.model';

@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
  providers: [GlobalStateProvider]
})
export class StatusPage {
  fridge: FridgePart;

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {
    this.fridge = this.mockFridge();
  }

  mockFridge(): FridgePart {
    return new FridgePart(true, "geladeira", 75);
  }

}
