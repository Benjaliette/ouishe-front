import { ButtonType } from '@/models/ButtonType';
import { ButtonComponent } from '@/shared/button/button.component';
import { FormGroupComponent } from '@/shared/form/form-group/form-group.component';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-auth-page',
    imports: [ReactiveFormsModule, FormsModule, ButtonComponent, FormGroupComponent],
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {
  readonly buttonType = ButtonType.Submit;

  isLoginMode = signal(false);

  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  switchType() {
    this.isLoginMode.update(value => !value);
  }
}
