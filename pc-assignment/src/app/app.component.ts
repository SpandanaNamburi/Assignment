import { Component, ViewChild } from '@angular/core';
import { ItemsListComponent } from './items-list/items-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchText: string = '';
  
  // @ViewChild(ItemsListComponent) itemsList: ItemsListComponent;

  constructor() { }

}
