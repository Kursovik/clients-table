import { Component, inject, Input, TemplateRef } from '@angular/core';
import { CreateEditFormComponent } from '../create-edit-form/create-edit-form.component';
import { ModalService } from '../../services/modal.service';
import { FacadeService } from '../../services/facade.service';
import {NzModalRef} from "ng-zorro-antd/modal";

/* Компонент с кнопками создания и удаления записей таблицы */
@Component({
  selector: 'app-table-clients-buttons',
  templateUrl: './table-clients-buttons.component.html',
  styleUrls: ['./table-clients-buttons.component.scss'],
  providers: [ModalService],
})
export class TableClientsButtonsComponent {
  private readonly facadeService = inject(FacadeService);
  @Input()
  allCheckedClients: Set<number>;
  private modalService = inject(ModalService);
  public nzTooltipTitle = 'Выберите одного или нескольких человек';
  public openModalAddOrEditClient(): void {
    this.modalService.openModal('Создать', CreateEditFormComponent, null);
  }

  public openConfirmDelete(deleteButtons: TemplateRef<any>): void {
    this.allCheckedClients.size &&
      this.modalService
        .openModal(
          'Удаление строк',
          `Удалить выбранные строки (${this.allCheckedClients.size})?`,
          null,
          deleteButtons,
        )
  }

 public deleteClients(ref: NzModalRef): void {
   this.facadeService.delete(this.allCheckedClients);
   this.allCheckedClients.clear();
   ref.destroy();
  }
}
