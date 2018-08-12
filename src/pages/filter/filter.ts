import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Item } from '../../models/item.model';
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  providers: [GlobalStateProvider]
})
export class FilterPage {
  items: Item[] = new Array<Items>();

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider) {
    this.mockItems();
  }

  itemChanged(event: { component: SelectSearchableComponent, value: Item}) {
    // Item was selected
  }

  itemsSubscription() {
    this.globals.getItems().subscribe(items => {

      this.items = items;
      console.log(items);
      
    });
  }

  mockItems(): void {
    let item: Item = new Item("Leite", "caixa", 4, 3);
    let item2: Item = new Item("Carne", "pacote", 4, 5);
    let item3: Item = new Item("Arroz", "pacote", 4, 4)
    
    this.items.push(item);
    this.items.push(item2);
    this.items.push(item3);
  }

}
