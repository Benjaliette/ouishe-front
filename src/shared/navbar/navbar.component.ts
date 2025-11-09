import { Component } from '@angular/core';
import { LogoComponent } from '@/shared/logo/logo.component';
import { ContainerComponent } from '@/shared/container/container.component';
import { ButtonComponent } from '@/shared/button/button.component';
import { ButtonType } from '@/models/ButtonType';

@Component({
    selector: 'app-navbar',
    imports: [LogoComponent, ContainerComponent, ButtonComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly buttonType = ButtonType.Link;
}
