import { ButtonType } from '@/models/ButtonType';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { ZardCardComponent } from '@/shared/card/card.component';
import { LogoComponent } from '@/shared/logo/logo.component';
import { RouterLink } from "@angular/router";
import { LoginFormComponent } from '@/shared/auth/login-form/login-form.component';
import { SignupFormComponent } from '@/shared/auth/signup-form/signup-form.component';

@Component({
    selector: 'app-auth-page',
    imports: [
      ReactiveFormsModule,
      ZardCardComponent,
      LogoComponent,
      RouterLink,
      LoginFormComponent,
      SignupFormComponent
  ],
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  readonly buttonType = ButtonType.Submit;

  isLoginMode = signal(true);

  switchType() {
    this.isLoginMode.update(value => !value);
  }
}
