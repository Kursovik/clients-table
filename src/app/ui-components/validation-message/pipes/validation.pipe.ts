import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
@Pipe({
  name: 'validation',
})
export class ValidationPipe implements PipeTransform {
 public transform(errors: ValidationErrors, messages: { [key: string]: string }): string | null {
    if (!errors) return null;

    let message: string;
    Object.keys(errors).forEach(
      (key) =>
        (message = messages[key] || errors[key])
    );
    return typeof message != 'boolean' ? message : '';
  }
}
