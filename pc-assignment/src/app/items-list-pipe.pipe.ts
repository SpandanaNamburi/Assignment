import { Pipe, PipeTransform } from '@angular/core';
import { ItemsListModel } from './items-list-model';

@Pipe({ name: 'itemFilter' })
export class FilterPipe implements PipeTransform {
    transform(items: ItemsListModel[], searchText: string): ItemsListModel[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();

        return items.filter(i => {
            return ((i.listName.toLocaleLowerCase().includes(searchText)));
        });
    }
}