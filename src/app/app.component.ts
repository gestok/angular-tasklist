import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Go to Super Market')
  ];
  listFilter : string = '0';
  newWishText = '';
  title = 'angular-tasklist';
  
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[parseInt(this.listFilter)]);
  }

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: any){
    item.isComplete = !item.isComplete;
  }

}
