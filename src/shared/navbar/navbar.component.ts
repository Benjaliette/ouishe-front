import { Component } from '@angular/core';
import { LogoComponent } from '@/shared/logo/logo.component';
import { ContainerComponent } from '@/shared/container/container.component';
import { ButtonComponent } from '@/shared/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, ContainerComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
