import { Component, inject, Input, OnInit } from '@angular/core';
import { IUsers } from '../../types/clients';
import { ModalService } from '../../services/modal.service';
import { CreateEditFormComponent } from '../create-edit-form/create-edit-form.component';


@Component({
  selector: 'app-table-clients-view',
  templateUrl: './table-clients-view.component.html',
  styleUrls: ['./table-clients-view.component.scss'],
  providers: [ModalService],
})
export class TableClientsViewComponent<T extends IUsers> implements OnInit {
  private readonly modalService = inject(ModalService);
  @Input()
  public data: T[];

  public checked = false;
  public indeterminate = false;
  public listOfCurrentPageData: readonly T[] = [];
  public setOfCheckedId = new Set<number>();
  public ngOnInit(): void {
    this.listOfCurrentPageData = this.data;
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  public refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData;
    this.checked = listOfEnabledData.every(({ id }) =>
      this.setOfCheckedId.has(id),
    );
    this.indeterminate =
      listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  public onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  public onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData.forEach(({ id }) =>
      this.updateCheckedSet(id, checked),
    );
    this.refreshCheckedStatus();
  }

  public editClient(item: IUsers): void {
    this.modalService.openModal('Редактировать', CreateEditFormComponent, item);
  }
}
