import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { FridgePartFirebase } from '../../models/fridge-part-firebase';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';

@Injectable()
export class GlobalStateProvider {

  private fridge: AngularFireObject<FridgePartFirebase>;
  private items: AngularFireList<Item>;

  constructor(private afDb: AngularFireDatabase) {
    this.fridge = this.afDb.object<FridgePartFirebase>('fridge');
    this.items = this.afDb.list<Item>('items');

  }

  getFridge(): Observable<FridgePartFirebase> {
    return this.fridge.valueChanges();
  }

  getItems(): Observable<Item[]> {
    return this.items.valueChanges();
  }

  saveItem(item: Item) {
    this.items.set(item.name, item).then(() => {
      console.log('Successful saving.');
    }, err => {
      console.error('Error trying to save: ', err);
    });
  }

  deleteItem(item: Item) {
    this.items.remove(item.name).then(() => {
      console.log('Successful deletion.');
    }, err => {
      console.error('Error trying to delete: ', err);
    });
  }

  unityForQuantity(item: Item, quantity: number): string {
    return quantity + (quantity <= 1 ? ` ${item.unity}` : ` ${item.unity}s`);
  }

  storedFilterComparison(item: Item): string {
    return `${item.stored ? item.stored : 0}/${item.filterCount} ${item.unity}s`;
  }

}
