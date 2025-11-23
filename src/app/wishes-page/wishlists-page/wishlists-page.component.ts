import { Component, input } from '@angular/core';
import { ZardTabComponent, ZardTabGroupComponent } from '@/shared/tabs/tabs.component';
import { CreateCardComponent } from '@/shared/card/create-card/create-card.component';
import { WishlistCardComponent } from '@/shared/card/wishlist-card/wishlist-card.component';
import { Wish } from '@/models/Wish';

@Component({
  selector: 'app-wishlists-page',
  imports: [
    ZardTabComponent,
    ZardTabGroupComponent,
    CreateCardComponent,
    WishlistCardComponent
  ],
  templateUrl: './wishlists-page.component.html',
  styleUrl: './wishlists-page.component.scss',
})
export class WishlistsPageComponent {
  wishes = input<Wish[]|undefined>();
}
