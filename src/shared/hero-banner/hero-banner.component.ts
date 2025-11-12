import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../mybutton/button.component';
import { ContainerComponent } from '../container/container.component';
import { ButtonType } from '@/models/ButtonType';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { ZardInputDirective } from '@/shared/input/input.directive';
import { ZardButtonGroupComponent } from '@/shared/button-group/button-group.component';

@Component({
    selector: 'app-hero-banner',
    imports: [ZardButtonGroupComponent, ZardButtonComponent, ZardInputDirective, ButtonComponent, ContainerComponent],
    templateUrl: './hero-banner.component.html',
    styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  readonly creerButtonType = ButtonType.Link;
}
