import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface FormFieldValue {
  value: unknown;
  isValid: boolean;
}

@Component({
    selector: 'app-form-group',
    imports: [],
    templateUrl: './form-group.component.html',
    styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  form = input<FormGroup>();
  name = input<string>();
  type = input<string>();
  label = input<string>();
  errorText = input<string>();

  valueChanged = output<FormFieldValue>();

  control = new FormControl('');

  ngOnInit() {
    this.control.valueChanges
      .subscribe(currentValue => {
        this.valueChanged.emit({
          value: currentValue,
          isValid: this.control.valid
        });
      });
  }
}
