import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
  providers: [GlobalStateProvider]
})
export class FridgeMonitorPage {
  items: Item[] = new Array<Item>();

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {
    // this.mockItem();
    this.itemsSubscription();
  }

  itemsSubscription() {
    this.globals.getItems().subscribe(items => {

      this.items = items;
      console.log(items);

    });
  }

  get filterSet(): boolean {
    return this.items && this.items.length > 0;
  }

  configure() {
    let t: Tabs = this.navCtrl.parent;
    t.select(2);
  }

  get itemsExceedingFilter(): Item[] {
    return this.items.filter(item => item.stored > item.filterCount);
  }

  get itemsMeetingFilter(): Item[] {
    return this.items.filter(item => item.stored == item.filterCount);
  }

  get itemsUnderFilter(): Item[] {
    return this.items.filter(item => item.stored < item.filterCount);
  }

  get storageItemCount(): number {
    let count = 0;
    this.items.forEach(item => count += item.stored)
    return count;
  }

  get filterItemCount(): number {
    let count = 0;
    this.items.forEach(item => count += item.filterCount)
    return count;
  }

  unityForQuantity(item: Item, quantity: number): string {
    return this.globals.unityForQuantity(item, quantity);
  }

}
