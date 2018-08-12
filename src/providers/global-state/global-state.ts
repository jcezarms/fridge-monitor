import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { FridgePartFirebase } from '../../models/fridge-part-firebase';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';

@Injectable()
export class GlobalStateProvider {

  fridge: AngularFireObject<FridgePartFirebase>;
  items: AngularFirestoreCollection<Item>;

  constructor(private afDb: AngularFireDatabase, private afs: AngularFirestore) {
    this.fridge = this.afDb.object<FridgePartFirebase>('fridge');
    this.items = afs.collection<Item>('items');
  }

  getFridge(): Observable<FridgePartFirebase> {
    return this.fridge.valueChanges();
  }

  getItems(): Observable<Item[]> {
    return this.items.valueChanges();
  }

  saveItem(item: Item) {
    this.items.doc(item.name).set(item);
  }

}
