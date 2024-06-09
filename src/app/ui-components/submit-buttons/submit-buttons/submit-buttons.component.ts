import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit-buttons',
  template: `
    <div class="result-buttons">
      <button class="cancel-btn" (click)="onCancel.emit()" type="button">
        {{ cancelLabel }}
      </button>
      <button
        class="submit-btn"
        type="submit"
        (click)="onSubmit.emit()"
        [disabled]="isDisabled"
      >
        {{ submitLabel }}
      </button>
    </div> `,
  styleUrls: ['./submit-buttons.component.scss'],
})
export class SubmitButtonsComponent {
  @Input()
  public cancelLabel = 'Отмена';
  @Input()
  public submitLabel: string;
  @Input()
  public isDisabled: boolean;

  @Output()
  public onSubmit = new EventEmitter();
  @Output()
  public onCancel = new EventEmitter();
}
