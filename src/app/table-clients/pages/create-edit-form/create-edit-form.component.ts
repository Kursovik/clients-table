import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { RegExp } from '../../constants/reg-exp';
import { IUsers } from '../../types/clients';
import { FacadeService } from '../../services/facade.service';
import { ValidationMessages } from '../../../ui-components/validation-message/constants/validation-messages';
@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.scss'],
})
export class CreateEditFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly facadeService = inject(FacadeService);
  private readonly modal = inject(NzModalRef);
  private readonly nzModalData: IUsers = inject(NZ_MODAL_DATA);
  public get errors() {
    return {
      name: {
        minlength: ValidationMessages.minLength(2),
        required: ValidationMessages.required,
      },
      surname: {
        minlength: ValidationMessages.minLength(2),
        required: ValidationMessages.required,
      },
      email: {
        pattern: 'Некорректный адрес',
        required: ValidationMessages.required,
      },
      phone: { pattern: 'Некорректный номер телефона' },
    };
  }
  public get btnsLabel(){
    return {
      submitLabel: 'Сохранить',
      cancelLabel: 'Отмена'
    }
  }
  public form: FormGroup;

  public ngOnInit(): void {
    this.initForm();
    this.patchForm();
  }
  private initForm(): void {
    this.form = this.fb.group(
      {
        name: [null, [Validators.required, Validators.minLength(2)]],
        surname: [null, [Validators.required, Validators.minLength(2)]],
        email: [null, [Validators.required, Validators.pattern(RegExp.email)]],
        phone: [null, [Validators.pattern(RegExp.phone)]],
      },
    );
  }
  private patchForm(): void {
    this.form.patchValue({
      ...this.nzModalData,
    });
  }
  public cancelModal(){
    this.modal.destroy();
  }

  public submit(): void {
    const submitValue = this.form.value;
    !!this.nzModalData
      ? this.facadeService.edit({ ...submitValue, id: this.nzModalData.id })
      : this.facadeService.create(submitValue);
    this.modal.destroy(this.form.value);
  }
}
