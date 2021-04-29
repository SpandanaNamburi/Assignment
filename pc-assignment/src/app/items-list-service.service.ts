import { ItemsListModel } from './items-list-model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class ItemsListService {

    constructor() { }

    itemsListData(): ItemsListModel[] {
        const itemData: ItemsListModel[] = [
            { date: '', listName: 'Competitive Intelligence', entitiesNo: 0, actions: '' },
            { date: '', listName: 'My Vendors', entitiesNo: 0, actions: '' },
            { date: '', listName: 'My Customers', entitiesNo: 0, actions: '' },
            { date: 'Jul 23', listName: 'Test_30_Results', entitiesNo: 28, actions: 'mailShareEditDelete' },
            { date: 'Jun 28', listName: 'To_index', entitiesNo: 100, actions: 'mailShareEditDelete' },
            { date: 'Apr 10', listName: 'KPMG Requested Companies-Listed Set_Prasad Kumar', entitiesNo: 34, actions: 'mailShareEditDelete' },
            { date: 'Mar 12', listName: 'Error Case-LTB To EBITDA Blank_Prasad Kumar', entitiesNo: 24, actions: 'mailShareEditDelete' },
            { date: 'Dec 14', listName: 'Two Companies', entitiesNo: 2, actions: 'mailShareEditDelete' },
            { date: 'Nov 01', listName: 'Custom', entitiesNo: 30, actions: 'mailShareEditDelete' },
            { date: 'Oct 29', listName: 'Mumbai', entitiesNo: 3, actions: 'mailShareEditDelete' },
          ];
          return itemData;
    }

    itemDetailsData(): string[] {
      const itemDetails = [
        'Bundl Technologies Private Limited(Swiggy)',
        'Hector Beverages Private Limited',
        'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd',
        'Infosys Limited',
        'Delivery Private Limited',
        'Wow Momo Foods Private Limited',
        'Rebel foods Private Limited',
        'Lending Card Technologies Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited',
        'Gala Precision Engineering Private Limited',
        'Balaji Wafors Private Limited',
        'Sangeetha Mobiles Private Limited',
        'Vodafone Idea Limited',
        'Vakrangee Ltd.'
      ];
      return itemDetails;
    }
}