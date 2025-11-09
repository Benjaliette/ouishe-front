import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ContainerComponent } from '../container/container.component';
import { ButtonType } from '@/models/ButtonType';

@Component({
    selector: 'app-hero-banner',
    imports: [NgOptimizedImage, ButtonComponent, ContainerComponent],
    templateUrl: './hero-banner.component.html',
    styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  readonly creerButtonType = ButtonType.Link;
}
