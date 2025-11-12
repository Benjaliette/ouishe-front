import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/shared/form/form.component';
import { ZardInputDirective } from '@/shared/input/input.directive';
import { ZardButtonComponent } from '@/shared/button/button.component';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    ZardInputDirective,
    ZardButtonComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  protected readonly isLoading = signal(false);

  isLoginMode = signal(false);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  switchType() {
    // TODO: implémenter le switch entre login et signup
    this.isLoginMode.update(value => !value);
  }
}
