import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsListModel } from '../items-list-model';
import { ItemsListService } from '../items-list-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() searchText: string = '';
  
  displayedColumns: string[] = ['date', 'listName', 'entitiesNo', 'actions', 'details'];
  resizeTable: boolean = false;
  itemDetails: string[] = [];

  dataSource = new MatTableDataSource<ItemsListModel>(this.itemsList.itemsListData()).filteredData;

  constructor( private itemsList: ItemsListService ) { }

  ngOnInit() {
  }

  showItemDetails() {
    this.resizeTable = true;
    this.getItemDetailsData();
  }

  getItemDetailsData() {
    this.itemDetails = this.itemsList.itemDetailsData();
  }

}
