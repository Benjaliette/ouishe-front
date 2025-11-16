import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/shared/form/form.component';
import { ZardInputDirective } from '@/shared/input/input.directive';
import { ZardButtonComponent } from '@/shared/button/button.component';
import { matchValidator } from '@/shared/utils/confirm-password.validator';
import { VALIDATORS_ERROR_MESSAGES, ErrorMessage } from '@/shared/constants/validators-error-messages';
import { Router } from '@angular/router';
import { UserStateService } from '@/app/user/user-state.service';
import { User } from '@/models/User';

@Component({
  selector: 'app-signup-form',
  imports: [
    ReactiveFormsModule,
    ZardInputDirective,
    ZardButtonComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent
  ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  protected readonly isLoading = signal(false);
  readonly #router = inject(Router);
  readonly #userState = inject(UserStateService);

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6), matchValidator('confirmPassword', true)]),
    confirmPassword: new FormControl('', [Validators.required, matchValidator('password')])
  });

  isInvalidAndTouched(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.invalid && control.touched;
  }

  getErrorMessage(controlName: string): ErrorMessage {
    const control = this.signupForm.get(controlName);
    if (!control || !control.errors) {
      return '';
    }

    const firstKey = Object.keys(control.errors)[0];
    const messageOrFn = VALIDATORS_ERROR_MESSAGES[firstKey];
    const errObj = control.errors[firstKey];
    return typeof messageOrFn === 'function' ? messageOrFn(errObj) : (messageOrFn ?? '');
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    const { email, username, password } = this.signupForm.value;
    const payload: User = {
      email: email ?? '',
      username: username ?? undefined,
      password: password ?? ''
    };

    this.#userState.createUser(payload).subscribe(newUser => {
      if (newUser) {
        this.#router.navigate(['/users', newUser.id, 'wishes']);
      } else {
        alert('La création a échoué.');
      }
    });
  }
}
