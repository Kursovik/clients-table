import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
/* Компонент ,содержащий базовый input */
@Component({
  selector: 'app-input',
  template: `
    <input
      #inputElement
      placeholder=""
      [id]="label"
      nz-input
      [value]="value"
      (input)="onChange(inputElement.value)"
    />
    <label [class.label-invalid]="control.control.invalid && control.control.dirty" [for]="label">{{
      label
    }}</label>
    <app-validation-message
      [control]="control.control"
      [messages]="errors"
    ></app-validation-message> `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  private readonly injector = inject(Injector);
  @Input()
  public errors: { [key: string]: string };
  @Input()
  public label: string;
  public onChange: (value: string) => void;
  public value: string;
  public control: NgControl;

 public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {}

  public writeValue(obj: any): void {
    this.value = obj;
  }
  public ngOnInit(): void {
    this.control = this.injector.get(NgControl);
  }
}
