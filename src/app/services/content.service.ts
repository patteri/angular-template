// Example service for accessing contents of the page
// Should be replaced by querying backend

import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  constructor() { }

  getItems(): Promise<string[]> {
    return Promise.resolve(['First', 'Second', 'Third']);
  }

}
