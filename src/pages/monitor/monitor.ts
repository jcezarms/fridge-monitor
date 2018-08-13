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
    return this.items.map(item => item.stored ? item.stored : 0).reduce((prev, cur) => +prev.valueOf() + +cur.valueOf());
  }

  get filterItemCount(): number {
    return this.items.map(item => item.filterCount).reduce((prev, cur) => +prev.valueOf() + +cur.valueOf());
  }

  unityForQuantity(item: Item, quantity: number): string {
    return this.globals.unityForQuantity(item, quantity);
  }

}
