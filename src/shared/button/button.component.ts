import { ButtonType } from '@/models/ButtonType';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-button',
    imports: [RouterLink],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  readonly type = input<ButtonType>();
  readonly link = input<string|null>();

  readonly isLink = computed<boolean>(() => this.type() === ButtonType.Link && this.link() != null);
}
