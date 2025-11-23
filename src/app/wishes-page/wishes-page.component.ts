import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { ZardAvatarComponent } from '@/shared/avatar/avatar.component';
import { ZardBreadcrumbModule } from '@/shared/breadcrumb/breadcrumb.module';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { ZardDividerComponent } from '@/shared/divider/divider.component';
import { ZardIconComponent } from '@/shared/icon/icon.component';
import type { ZardIcon } from '@/shared/icon/icons';
import { ZardMenuModule } from '@/shared/menu/menu.module';
import { ZardTooltipModule } from '@/shared/tooltip/tooltip';
import { LayoutModule } from '@/shared/layout/layout.module';
import { NavbarComponent } from '@/shared/navbar/navbar.component';
import { WishlistsPageComponent } from './wishlists-page/wishlists-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { UserStateService } from '../user/user-state.service';

interface MenuItem {
  icon: ZardIcon;
  label: string;
  submenu?: { label: string }[];
  buttonType: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

@Component({
  selector: 'app-wishes-page',
  imports: [
    LayoutModule,
    ZardButtonComponent,
    ZardBreadcrumbModule,
    ZardMenuModule,
    ZardTooltipModule,
    ZardDividerComponent,
    ZardAvatarComponent,
    ZardIconComponent,
    NavbarComponent,
    WishlistsPageComponent,
    FriendsPageComponent,
    GiftsPageComponent
  ],
  templateUrl: './wishes-page.component.html',
  styleUrl: './wishes-page.component.scss',
})
export class WishesPageComponent {
  sidebarCollapsed = signal(false);

  readonly #userState = inject(UserStateService);

  section = computed(() => this.mainMenuItems().find(item => item.buttonType === 'secondary')?.label || 'Listes');
  wishes = computed(() => {
    const wishesData = this.#userState.currentUserWishes();
    return Array.isArray(wishesData) ? wishesData : [];
  });


  mainMenuItems = signal<MenuItem[]>([
    { icon: 'square-library', label: 'Listes', buttonType: 'secondary' },
    { icon: 'users', label: 'Amis', buttonType: 'ghost' },
    { icon: 'sparkles', label: 'Idées cadeaux', buttonType: 'ghost' },
  ]);

  toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }

  onCollapsedChange(collapsed: boolean) {
    this.sidebarCollapsed.set(collapsed);
    console.log(this.wishes());
    console.log(this.#userState.currentUserWishes);
  }

  onMenuItemClick(item: MenuItem) {
    this.mainMenuItems.update(items =>
      items.map(i => ({
        ...i,
        buttonType: i.label !== item.label ? 'ghost' : 'secondary'
      }))
    );
  }
}
