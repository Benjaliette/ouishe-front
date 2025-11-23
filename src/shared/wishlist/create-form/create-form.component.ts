import { Z_MODAL_DATA } from '@/shared/dialog/dialog.service';
import { ZardInputDirective } from '@/shared/input/input.directive';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface iDialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-create-form',
  imports: [FormsModule, ReactiveFormsModule, ZardInputDirective],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  private zData: iDialogData = inject(Z_MODAL_DATA);

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {
    if (this.zData) this.form.patchValue(this.zData);
  }
}
