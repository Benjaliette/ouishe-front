import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function matchValidator(
  matchTo: string,
  reverse?: boolean
): ValidatorFn {
  return (control: AbstractControl):
  ValidationErrors | null => {
    const parent = control.parent;
    if (parent && reverse) {
      const controls: any = parent.controls;
      const c: AbstractControl | undefined = controls ? controls[matchTo] : undefined;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }

    const controls: any = parent ? parent.controls : null;
    const matchValue = controls && controls[matchTo] ? controls[matchTo].value : undefined;

    return !!parent &&
      !!parent.value &&
      control.value === matchValue
      ? null
      : { matching: true };
  };
}
