import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
  providers: [GlobalStateProvider]
})
export class FridgeMonitorPage {
  filterSet: boolean;
  items: Item[] = new Array<Item>();

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {
    this.mockItem();
  }

  mockItem(): void {
    let item: Item = new Item("Leite", "caixa", 4, 3);
    let item2: Item = new Item("Carne", "pacote", 4, 5);
    let item3: Item = new Item("Arroz", "pacote", 4, 4)
    
    this.items.push(item);
    this.items.push(item2);
    this.items.push(item3);
    
    this.filterSet = true;
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

}
