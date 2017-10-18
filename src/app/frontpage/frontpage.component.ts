import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { ListItem } from '../models/listitem';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  items: ListItem[] = [];
  selectedItem: ListItem;
  inputText = '';
  savedText = '';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getItems()
      .then(result => this.items = result);
  }

  itemSelected(item: ListItem) {
    this.selectedItem = item;
  }

  addItem(): void {
    this.contentService.addItem(new ListItem(false, this.inputText))
      .then(result => {
        this.items = result;
        this.savedText = `Value '${this.inputText}' was added!`;
        this.inputText = '';
      });
  }

  removeItem(item: ListItem) {
    this.contentService.removeItem(this.items.indexOf(item))
      .then(result => this.items = result);
  }

}
