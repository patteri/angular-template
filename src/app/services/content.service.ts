// Example service for managing resources of the page
// Backend queries should be used

import { Injectable } from '@angular/core';
import { ListItem } from '../models/listitem';

@Injectable()
export class ContentService {
  items: ListItem[];

  constructor() {
    this.items = [
      new ListItem(true, 'First bullet'),
      new ListItem(false, 'Second bullet'),
      new ListItem(false, 'Third bullet')
    ];
  }

  getItems(): Promise<ListItem[]> {
    return Promise.resolve(this.items);
  }

  addItem(item: ListItem): Promise<ListItem[]> {
    this.items.push(item);
    return Promise.resolve(this.items);
  }

  removeItem(index: number): Promise<ListItem[]> {
    this.items.splice(index, 1);
    return Promise.resolve(this.items);
  }

}
