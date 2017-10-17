import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  header = 'Header';
  items: string[] = [];
  inputText = '';
  savedText = '';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getItems()
      .then(result => this.items = result);
  }

  save(): void {
    this.savedText = `Value '${this.inputText}' was saved!`;
  }

}
