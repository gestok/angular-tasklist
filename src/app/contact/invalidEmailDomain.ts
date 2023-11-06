import { AbstractControl, ValidationErrors } from '@angular/forms';

export function invalidEmailDomain(control: AbstractControl): ValidationErrors | null {
  const value = control.value?.toLowerCase();
  const hosts = ['test.com', 'test.gr'];

  if (!value) null;

  const matches = hosts.some((host) => value.indexOf(`@${host}`) > -1);

  return matches ? { invalidEmailDomain: true } : null;
}
