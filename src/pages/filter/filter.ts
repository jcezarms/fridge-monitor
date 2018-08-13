import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateProvider } from '../../providers/global-state/global-state';

import { SelectSearchableComponent } from 'ionic-select-searchable';
import { Item } from '../../models/item.model';
import { GroceryProvider } from '../../providers/grocery/grocery';
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  providers: [GlobalStateProvider]
})
export class FilterPage {
  items: Item[] = new Array<Item>();
  defaultItems: Item[] = [];
  selectItem: Item = null;

  constructor(public navCtrl: NavController, public globals: GlobalStateProvider, public groceryProvider: GroceryProvider) {
    this.defaultItems = groceryProvider.getDefaultGroceryList();
  }
  
  itemChanged(event: { component: SelectSearchableComponent, value: Item}) {
    console.log(event);
  }

  itemsSubscription() {
    this.globals.getItems().subscribe(items => {

      this.items = items;
      console.log(items);
      
    });
  }

  removeItem(item: Item) {
    this.globals.deleteItem(item);
  }

  addCurrentItem() {
    this.globals.saveItem(this.selectItem);
    this.selectItem = null;
  }

  getSelectedItemLabel() {
    switch (this.selectItem.unity) {
      case "pacote":
      return `Quantos ${this.selectItem.unity}s?`
      case "caixa":
      case "garrafa":
      default:
        return `Quantas ${this.selectItem.unity}s?`
    }
  }

  storedFilterComparison(item: Item): string {
    return this.globals.storedFilterComparison(item);
  }

}
