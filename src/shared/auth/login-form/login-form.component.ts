import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/shared/form/form.component';
import { ZardInputDirective } from '@/shared/input/input.directive';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { Router } from '@angular/router';
import { UserStateService } from '@/app/user/user-state.service';
import { ErrorMessage, VALIDATORS_ERROR_MESSAGES } from '@/shared/constants/validators-error-messages';
import { User } from '@/models/User';

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

  readonly #router = inject(Router);
  readonly #userState = inject(UserStateService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && control.touched;
  }

  getErrorMessage(controlName: string): ErrorMessage {
    const control = this.loginForm.get(controlName);
    if (!control || !control.errors) {
      return '';
    }

    const firstKey = Object.keys(control.errors)[0];
    const messageOrFn = VALIDATORS_ERROR_MESSAGES[firstKey];
    const errObj = control.errors[firstKey];
    return typeof messageOrFn === 'function' ? messageOrFn(errObj) : (messageOrFn ?? '');
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    const payload: User = {
      email: email ?? '',
      password: password ?? ''
    };

    this.#userState.loadUser(payload).subscribe(foundUser => {
      if (foundUser) {
        this.#router.navigate(['/users', foundUser.id, 'wishes']);
      } else {
        alert('La création a échoué.');
      }
    });
  }
}
