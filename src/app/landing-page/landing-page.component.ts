import { Component } from '@angular/core';
import { LogoComponent } from '@/shared/logo/logo.component';
import { NavbarComponent } from '@/shared/navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
