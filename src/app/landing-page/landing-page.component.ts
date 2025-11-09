import { Component } from '@angular/core';
import { NavbarComponent } from '@/shared/navbar/navbar.component';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner.component';

@Component({
    selector: 'app-landing-page',
    imports: [NavbarComponent, HeroBannerComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
