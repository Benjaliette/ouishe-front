import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { ZardDropdownModule } from '@/shared/dropdown/dropdown.module';
import { ZardIconComponent } from '@/shared/icon/icon.component';
import { Wish } from '@/models/Wish';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-wishlist-card',
  imports: [ZardDropdownModule, ZardButtonComponent, ZardIconComponent, DatePipe],
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss', '../wish-card.component.scss'],
})
export class WishlistCardComponent {
  bannerImg = "assets/wishlist-icon.svg";

  wish = input<Wish>();
}
