import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  template: `<small *ngIf="control.invalid && control.dirty" class="error">{{
    control.errors | validation: messages
  }}</small>`,
  styleUrls: ['./validation-message.component.scss'],
})
export class ValidationMessageComponent {
  @Input()
  public messages: {};
  @Input()
  public control: AbstractControl;
}
